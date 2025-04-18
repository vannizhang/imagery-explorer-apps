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

// import { AnalysisToolHeader } from '@shared/components/AnalysisToolHeader';
import {
    ChangeCompareToolHeader,
    ChangeCompareToolControls,
} from '@shared/components/ChangeCompareTool';
import {
    fullPixelValuesRangeUpdated,
    selectedRangeUpdated,
} from '@shared/store/ChangeCompareTool/reducer';
import { selectSelectedOption4ChangeCompareTool } from '@shared/store/ChangeCompareTool/selectors';
// import { PixelRangeSlider } from '@shared/components/PixelRangeSlider';
// import {
//     selectedRangeUpdated,
//     selectedOption4ChangeCompareToolChanged,
// } from '@shared/store/ChangeCompareTool/reducer';
// import {
//     selectChangeCompareLayerIsOn,
//     selectSelectedOption4ChangeCompareTool,
//     selectUserSelectedRangeInChangeCompareTool,
// } from '@shared/store/ChangeCompareTool/selectors';
import { selectActiveAnalysisTool } from '@shared/store/ImageryScene/selectors';
// import { SpectralIndex } from '@typing/imagery-service';
import classNames from 'classnames';
import React, { useEffect, useMemo } from 'react';
import { useAppDispatch } from '@shared/store/configureStore';
// import { useAppDispatch } from '@shared/store/configureStore';
import { useAppSelector } from '@shared/store/configureStore';
import { PolarizationFilter } from './PolarizationFilter';
import { RadarIndex } from '@typing/imagery-service';
import {
    SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE,
    SENTINEL1_WATER_INDEX_PIXEL_RANGE,
} from '@shared/services/sentinel-1/config';
import { useSyncCalendarDateRange } from '../../hooks/useSyncCalendarDateRange';
import { TotalVisibleAreaInfo } from '@shared/components/TotalAreaInfo/TotalAreaInfo';
import { usePrevious } from '@shared/hooks/usePrevious';
import { useTranslation } from 'react-i18next';
import { APP_NAME } from '@shared/config';

/**
 * the index that user can select for the Change Compare Tool
 */
export type ChangeCompareToolOption4Sentinel1 =
    | 'water anomaly'
    | 'water'
    | 'log difference';

const [
    SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE_MIN,
    SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE_MAX,
] = SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE;

const [
    SENTINEL1_WATER_INDEX_PIXEL_RANGE_MIN,
    SENTINEL1_WATER_INDEX_PIXEL_RANGE_MAX,
] = SENTINEL1_WATER_INDEX_PIXEL_RANGE;

export const ChangeCompareToolPixelValueRange4Sentinel1: Record<
    ChangeCompareToolOption4Sentinel1,
    number[]
> = {
    'log difference': [-0.5, 0.5],
    // vegetation: [0, 1],
    /**
     * For the Water Index (SWI), we have selected a input range of -0.3 to 1, though it may need adjustment.
     * The SWI index is not well-documented with a specific range of values.
     */
    water: [
        SENTINEL1_WATER_INDEX_PIXEL_RANGE_MIN -
            SENTINEL1_WATER_INDEX_PIXEL_RANGE_MAX,
        SENTINEL1_WATER_INDEX_PIXEL_RANGE_MAX -
            SENTINEL1_WATER_INDEX_PIXEL_RANGE_MIN,
    ],
    /**
     * For Water Anomaly Index, we can use a input range of -2 to 0. Typically, oil appears within the range of -1 to 0.
     * The full pixel range of the change compare results is -2 to 2
     */
    'water anomaly': [
        SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE_MIN -
            SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE_MAX,
        SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE_MAX -
            SENTINEL1_WATER_ANOMALY_INDEX_PIXEL_RANGE_MIN,
    ],
};

export const ChangeCompareToolContainer = () => {
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const tool = useAppSelector(selectActiveAnalysisTool);

    const selectedOption: ChangeCompareToolOption4Sentinel1 = useAppSelector(
        selectSelectedOption4ChangeCompareTool
    ) as ChangeCompareToolOption4Sentinel1;

    const selectedOptionPreviousVal = usePrevious(selectedOption);

    const legendLabelText = useMemo(() => {
        // if (selectedOption === 'log difference') {
        //     return ['lower backscatter', 'higher backscatter'];
        // }

        return [t('decrease'), '', t('increase')];
    }, [selectedOption]);

    const comparisonTopic = useMemo(() => {
        if (selectedOption === 'log difference') {
            return t('backscatter', { ns: APP_NAME });
        }

        return '';

        // const data = ChangeCompareToolOptions.find(
        //     (d) => d.value === selectedOption
        // );

        // return data?.label || selectedOption;
    }, [selectedOption]);

    const ChangeCompareToolOptions: {
        value: ChangeCompareToolOption4Sentinel1;
        label: string;
    }[] = [
        {
            value: 'log difference',
            label: t('log_difference'),
        },
        // { value: 'vegetation', label: ' Dual-pol Radar Vegetation Index' },
        {
            value: 'water anomaly',
            label: t('water_anomaly'),
        },
        {
            value: 'water',
            label: t('water_index'),
        },
    ];

    useSyncCalendarDateRange();

    useEffect(() => {
        // If the previous value of the selected option is null, do not update the pixel range.
        // This ensures pixel range values are updated only when the user manually selects a new option.
        if (!selectedOptionPreviousVal) {
            return;
        }

        const pixelValuesRange =
            ChangeCompareToolPixelValueRange4Sentinel1[
                selectedOption as ChangeCompareToolOption4Sentinel1
            ];

        // Update the pixel values range based on the user-selected option.
        // Both the full and selected ranges need to be updated because each option has a significantly
        // different range. The current selected range might fall outside the full range of the new selection.
        if (pixelValuesRange) {
            dispatch(fullPixelValuesRangeUpdated(pixelValuesRange));
            dispatch(selectedRangeUpdated(pixelValuesRange));
        }
    }, [selectedOption]);

    if (tool !== 'change') {
        return null;
    }

    return (
        <div className={classNames('relative w-full h-full')}>
            <ChangeCompareToolHeader
                options={ChangeCompareToolOptions}
                tooltipText={t('change_compare_header_tooltip', {
                    ns: APP_NAME,
                })}
            />

            <ChangeCompareToolControls
                legendLabelText={legendLabelText}
                comparisonTopic={comparisonTopic}
                preselectionText={t('change_compare_preselection_text', {
                    ns: APP_NAME,
                })}
            />

            {selectedOption === 'log difference' && (
                <div className="absolute bottom-6 w-full">
                    <PolarizationFilter />
                </div>
            )}
        </div>
    );
};
