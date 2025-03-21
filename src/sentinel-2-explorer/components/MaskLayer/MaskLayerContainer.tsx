/* Copyright 2025 Esri
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
import React, { FC, useEffect, useMemo } from 'react';
// import { MaskLayer } from './MaskLayer';
import { useAppSelector } from '@shared/store/configureStore';
import {
    selectMaskLayerPixelValueRange,
    selectShouldClipMaskLayer,
    selectMaskLayerOpcity,
    selectSelectedIndex4MaskTool,
    selectMaskLayerPixelColor,
} from '@shared/store/MaskTool/selectors';
import {
    selectActiveAnalysisTool,
    selectAppMode,
    selectQueryParams4SceneInSelectedMode,
} from '@shared/store/ImageryScene/selectors';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import { SpectralIndex } from '@typing/imagery-service';
import { ImageryLayerWithPixelFilter } from '@shared/components/ImageryLayerWithPixelFilter';
import RasterFunction from '@arcgis/core/layers/support/RasterFunction';

import { useCalculateTotalAreaByPixelsCount } from '@shared/hooks/useCalculateTotalAreaByPixelsCount';
import { useAppDispatch } from '@shared/store/configureStore';
import { countOfVisiblePixelsChanged } from '@shared/store/Map/reducer';
import { SENTINEL_2_SERVICE_URL } from '@shared/services/sentinel-2/config';
import { getBandIndexesBySpectralIndex } from '@shared/services/sentinel-2/helpers';
import { useMaskLayerVisibility } from '@shared/components/MaskLayer/useMaskLayerVisibility';
import { useSentinel2MaskToolFullPixelValueRange } from '../MaskTool/useSentinel2MaskToolFullPixelValueRange';

type Props = {
    mapView?: MapView;
    groupLayer?: GroupLayer;
};

export const MaskLayerContainer: FC<Props> = ({ mapView, groupLayer }) => {
    const dispatch = useAppDispatch();

    const spectralIndex = useAppSelector(
        selectSelectedIndex4MaskTool
    ) as SpectralIndex;

    const { selectedRange } = useAppSelector(selectMaskLayerPixelValueRange);

    const pixelColor = useAppSelector(selectMaskLayerPixelColor);

    const opacity = useAppSelector(selectMaskLayerOpcity);

    const shouldClip = useAppSelector(selectShouldClipMaskLayer);

    const { objectIdOfSelectedScene } =
        useAppSelector(selectQueryParams4SceneInSelectedMode) || {};

    const isVisible = useMaskLayerVisibility();

    const rasterFunction = useMemo(() => {
        if (!spectralIndex) {
            return null;
        }

        return new RasterFunction({
            functionName: 'BandArithmetic',
            outputPixelType: 'f32',
            functionArguments: {
                Method: 0,
                BandIndexes: getBandIndexesBySpectralIndex(spectralIndex) || '',
            },
        });
    }, [spectralIndex]);

    // const fullPixelValueRange = useMemo(() => {
    //     return [-1, 1];
    // }, [spectralIndex]);

    const fullPixelValueRange = useSentinel2MaskToolFullPixelValueRange();

    useCalculateTotalAreaByPixelsCount({
        objectId: objectIdOfSelectedScene,
        serviceURL: SENTINEL_2_SERVICE_URL,
        pixelSize: mapView.resolution,
    });

    return (
        <ImageryLayerWithPixelFilter
            serviceURL={SENTINEL_2_SERVICE_URL}
            // mapView={mapView}
            groupLayer={groupLayer}
            objectId={objectIdOfSelectedScene}
            rasterFunction={rasterFunction}
            visible={isVisible}
            selectedPixelValueRange={selectedRange}
            fullPixelValueRange={fullPixelValueRange}
            pixelColor={pixelColor}
            opacity={opacity}
            blendMode={shouldClip ? 'destination-atop' : 'normal'}
            countOfPixelsOnChange={(totalPixels, visiblePixels) => {
                dispatch(countOfVisiblePixelsChanged(visiblePixels));
            }}
        />
    );
};
