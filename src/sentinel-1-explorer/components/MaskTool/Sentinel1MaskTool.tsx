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

import { AnalysisToolHeader } from '@shared/components/AnalysisToolHeader';
// import { PixelRangeSlider as MaskLayerPixelRangeSlider4SpectralIndex } from '@shared/components/MaskTool/PixelRangeSlider';
// import { PixelRangeSlider as MaskLayerPixelRangeSlider4SurfaceTemp } from './PixelRangeSlider4SurfaceTemp';
import {
    MaskLayerRenderingControls,
    MaskToolWarnigMessage,
    // MaskLayerVisibleAreaInfo,
} from '@shared/components/MaskTool';
import { selectedIndex4MaskToolChanged } from '@shared/store/MaskTool/reducer';
import {
    selectSelectedIndex4MaskTool,
    selectMaskLayerPixelValueRange,
    // selectActiveAnalysisTool,
} from '@shared/store/MaskTool/selectors';
import { updateMaskLayerSelectedRange } from '@shared/store/MaskTool/thunks';
import React, { useEffect, useMemo } from 'react';
import { useAppDispatch } from '@shared/store/configureStore';
import { useAppSelector } from '@shared/store/configureStore';
import {
    selectActiveAnalysisTool,
    selectQueryParams4MainScene,
    selectQueryParams4SceneInSelectedMode,
} from '@shared/store/ImageryScene/selectors';
import classNames from 'classnames';
import { PixelRangeSlider } from '@shared/components/PixelRangeSlider';
import { RadarIndex } from '@typing/imagery-service';
import {
    SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE,
    SENTINEL1_WATER_INDEX_PIXEL_RANGE,
    SENTINEL1_SHIP_AND_URBAN_INDEX_PIXEL_RANGE,
} from '@shared/services/sentinel-1/config';
import { TotalVisibleAreaInfo } from '@shared/components/TotalAreaInfo/TotalAreaInfo';
import { useSentinel1MaskToolFullPixelValueRange } from './useSentinel1MaskToolFullPixelValueRange';
import { useTranslation } from 'react-i18next';
import { APP_NAME } from '@shared/config';

export const Sentinel1PixelValueRangeByIndex: Record<RadarIndex, number[]> = {
    water: SENTINEL1_WATER_INDEX_PIXEL_RANGE,
    'water anomaly': SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE,
    ship: SENTINEL1_SHIP_AND_URBAN_INDEX_PIXEL_RANGE,
    urban: SENTINEL1_SHIP_AND_URBAN_INDEX_PIXEL_RANGE,
};

export const Sentinel1MaskTool = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const tool = useAppSelector(selectActiveAnalysisTool);

    const selectedIndex = useAppSelector(selectSelectedIndex4MaskTool);

    const maskOptions = useAppSelector(selectMaskLayerPixelValueRange);

    const { objectIdOfSelectedScene } =
        useAppSelector(selectQueryParams4SceneInSelectedMode) || {};

    // const queryParams4MainScene = useAppSelector(selectQueryParams4MainScene);

    const shouldBeDisabled = useMemo(() => {
        return !objectIdOfSelectedScene;
    }, [objectIdOfSelectedScene]);

    // const fullPixelValueRange = useMemo(() => {
    //     return (
    //         Sentinel1PixelValueRangeByIndex[selectedIndex as RadarIndex] || [
    //             0, 0,
    //         ]
    //     );
    // }, [selectedIndex]);

    const fullPixelValueRange = useSentinel1MaskToolFullPixelValueRange();

    const countOfTicks = useMemo(() => {
        // use 5 ticks if water index is selected
        if (selectedIndex === 'water') {
            return 5;
        }

        // return undefined to have the pixel range slider to calculate it dynamically
        return undefined;
    }, [selectedIndex]);

    // const steps = useMemo(() => {
    //     return selectedIndex === 'ship' || selectedIndex === 'urban'
    //         ? 0.01
    //         : 0.05;
    // }, [selectedIndex]);

    // useEffect(() => {
    //     dispatch(updateMaskLayerSelectedRange (fullPixelValueRange));
    // }, [fullPixelValueRange]);

    if (tool !== 'mask') {
        return null;
    }

    return (
        <div className={classNames('w-full h-full')}>
            <AnalysisToolHeader
                title="Index"
                dropdownListOptions={[
                    {
                        value: 'water' as RadarIndex,
                        label: t('water'),
                    },
                    {
                        value: 'water anomaly' as RadarIndex,
                        label: t('water_anomaly'),
                    },
                    {
                        value: 'ship' as RadarIndex,
                        label: t('ship'),
                    },
                    {
                        value: 'urban' as RadarIndex,
                        label: t('built_up'),
                    },
                ]}
                selectedValue={selectedIndex}
                tooltipText={t('mask_tool_tooltip', { ns: APP_NAME })}
                dropdownMenuSelectedItemOnChange={(val) => {
                    dispatch(selectedIndex4MaskToolChanged(val as RadarIndex));
                }}
            />

            {shouldBeDisabled ? (
                <MaskToolWarnigMessage />
            ) : (
                <>
                    <div className={classNames('relative w-full h-[120px]')}>
                        <div className="absolute top-3 right-0">
                            <TotalVisibleAreaInfo
                                label={t('estimated_mask_area')}
                            />
                        </div>

                        <PixelRangeSlider
                            values={maskOptions.selectedRange}
                            min={fullPixelValueRange[0]}
                            max={fullPixelValueRange[1]}
                            steps={0.01}
                            countOfTicks={countOfTicks}
                            valuesOnChange={(values) => {
                                dispatch(updateMaskLayerSelectedRange(values));
                            }}
                            showSliderTooltip={true}
                        />
                    </div>

                    <MaskLayerRenderingControls />
                </>
            )}
        </div>
    );
};
