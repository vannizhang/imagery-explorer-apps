/* Copyright 2024 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import MapView from '@arcgis/core/views/MapView';
import React, { FC, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
    selectAppMode,
    selectQueryParams4MainScene,
    selectQueryParams4SecondaryScene,
} from '@shared/store/ImageryScene/selectors';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import {
    selectFullPixelValuesRangeInChangeCompareTool,
    selectSelectedOption4ChangeCompareTool,
    selectUserSelectedRangeInChangeCompareTool,
} from '@shared/store/ChangeCompareTool/selectors';
import { useChangeCompareLayerVisibility } from '@shared/components/ChangeCompareLayer';
import { ImageryLayerWithPixelFilter } from '@shared/components/ImageryLayerWithPixelFilter';
import {
    SENTINEL_1_SERVICE_URL,
    Sentinel1FunctionName,
} from '@shared/services/sentinel-1/config';
import {
    getPixelColor4ChangeCompareLayer,
    sortQueryParams4ImagerySceneByAcquisitionDate,
} from '@shared/components/ChangeCompareTool/helpers';
import RasterFunction from '@arcgis/core/layers/support/RasterFunction';
import { ChangeCompareToolOption4Sentinel1 } from '../ChangeCompareTool/ChangeCompareToolContainer';
import {
    divide,
    log10,
    minus,
} from '@arcgis/core/layers/support/rasterFunctionUtils';
import { selectPolarizationFilter } from '@shared/store/Sentinel1/selectors';

type Props = {
    mapView?: MapView;
    groupLayer?: GroupLayer;
};

const InputRasterFunctionName: Record<
    ChangeCompareToolOption4Sentinel1,
    Sentinel1FunctionName
> = {
    'log difference': null,
    'water anomaly index': 'Sentinel-1 Water Anomaly Index Raw',
    // vegetation: 'Sentinel-1 DpRVIc Raw',
    water: 'Sentinel-1 Water Anomaly Index Raw',
};

export const ChangeCompareLayerContainer: FC<Props> = ({
    mapView,
    groupLayer,
}) => {
    const mode = useSelector(selectAppMode);

    const selectedOption: ChangeCompareToolOption4Sentinel1 = useSelector(
        selectSelectedOption4ChangeCompareTool
    ) as ChangeCompareToolOption4Sentinel1;

    const queryParams4SceneA = useSelector(selectQueryParams4MainScene);

    const queryParams4SceneB = useSelector(selectQueryParams4SecondaryScene);

    const selectedRange = useSelector(
        selectUserSelectedRangeInChangeCompareTool
    );

    const fullPixelValueRange = useSelector(
        selectFullPixelValuesRangeInChangeCompareTool
    );

    const polarizationFilter = useSelector(selectPolarizationFilter);

    const isVisible = useChangeCompareLayerVisibility();

    const rasterFunction: RasterFunction = useMemo(() => {
        if (!isVisible) {
            return null;
        }

        if (
            !queryParams4SceneA?.objectIdOfSelectedScene ||
            !queryParams4SceneB?.objectIdOfSelectedScene
        ) {
            return null;
        }

        // Sort query parameters by acquisition date in ascending order.
        const [
            queryParams4SceneAcquiredInEarlierDate,
            queryParams4SceneAcquiredInLaterDate,
        ] = sortQueryParams4ImagerySceneByAcquisitionDate(
            queryParams4SceneA,
            queryParams4SceneB
        );

        if (selectedOption === 'log difference') {
            const rasterFunction: Sentinel1FunctionName =
                polarizationFilter === 'VV'
                    ? 'Sentinel-1 RTC Despeckle VV Amplitude'
                    : 'Sentinel-1 RTC Despeckle VH Amplitude';

            return log10({
                raster: divide({
                    raster: new RasterFunction({
                        functionName: rasterFunction,
                        functionArguments: {
                            raster:
                                '$' +
                                queryParams4SceneAcquiredInLaterDate?.objectIdOfSelectedScene,
                        },
                    }),
                    raster2: new RasterFunction({
                        functionName: rasterFunction,
                        functionArguments: {
                            raster:
                                '$' +
                                queryParams4SceneAcquiredInEarlierDate?.objectIdOfSelectedScene,
                        },
                    }),
                }),
                outputPixelType: 'f32',
            });
        }

        const rasterFunction = InputRasterFunctionName[selectedOption];

        if (!rasterFunction) {
            return null;
        }

        return minus({
            raster: new RasterFunction({
                functionName: rasterFunction,
                functionArguments: {
                    raster:
                        '$' +
                        queryParams4SceneAcquiredInLaterDate?.objectIdOfSelectedScene,
                },
            }),
            raster2: new RasterFunction({
                functionName: rasterFunction,
                functionArguments: {
                    raster:
                        '$' +
                        queryParams4SceneAcquiredInEarlierDate?.objectIdOfSelectedScene,
                },
            }),
            outputPixelType: 'f32',
        });
    }, [
        isVisible,
        selectedOption,
        queryParams4SceneA,
        queryParams4SceneB,
        polarizationFilter,
    ]);

    return (
        <ImageryLayerWithPixelFilter
            mapView={mapView}
            groupLayer={groupLayer}
            serviceURL={SENTINEL_1_SERVICE_URL}
            rasterFunction={rasterFunction}
            visible={isVisible}
            pixelValueRange={selectedRange}
            fullPixelValueRange={fullPixelValueRange}
            getPixelColor={getPixelColor4ChangeCompareLayer}
        />
    );
};
