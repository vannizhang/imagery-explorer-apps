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

import React, { FC, useMemo } from 'react';
import { useAppSelector } from '@shared/store/configureStore';
import {
    selectTrendToolData,
    selectSelectedIndex4TrendTool,
    selectTrendToolOption,
} from '@shared/store/TrendTool/selectors';
import { TemporalProfileData } from '@typing/imagery-service';
import { SpectralIndex } from '@typing/imagery-service';
import { LineChartDataItem } from '@vannizhang/react-d3-charts/dist/LineChart/types';
import {
    LANDSAT_SURFACE_TEMPERATURE_MIN_CELSIUS,
    LANDSAT_SURFACE_TEMPERATURE_MIN_FAHRENHEIT,
    LANDSAT_SURFACE_TEMPERATURE_MAX_CELSIUS,
    LANDSAT_SURFACE_TEMPERATURE_MAX_FAHRENHEIT,
} from '@shared/services/landsat-level-2/config';
import { calcSpectralIndex } from '@shared/services/landsat-level-2/helpers';
import { formatInUTCTimeZone } from '@shared/utils/date-time/formatInUTCTimeZone';
import { DATE_FORMAT_TEMPORAL_PROFILE } from '@shared/constants/UI';

/**
 * Converts Landsat temporal profile data to chart data.
 * @param temporalProfileData - Array of temporal profile data.
 * @param spectralIndex - Spectral index to calculate the value for each data point.
 * @param month2month - if true, user is trying to plot month to month trend line for a selected year.
 * @returns An array of QuickD3ChartDataItem objects representing the chart data.
 *
 */
const convertLandsatTemporalProfileData2ChartData = (
    temporalProfileData: TemporalProfileData[],
    spectralIndex: SpectralIndex,
    month2month?: boolean
): LineChartDataItem[] => {
    if (!temporalProfileData || !temporalProfileData.length) {
        return [];
    }

    const data = temporalProfileData.map((d) => {
        const { acquisitionDate, values } = d;

        // calculate the spectral index that will be used as the y value for each chart vertex
        let y = calcSpectralIndex(spectralIndex, values);

        let yMin = -1;
        let yMax = 1;

        // justify the y value for surface temperature index to make it not go below the hardcoded y min
        if (
            spectralIndex === 'temperature farhenheit' ||
            spectralIndex === 'temperature celcius'
        ) {
            yMin =
                spectralIndex === 'temperature farhenheit'
                    ? LANDSAT_SURFACE_TEMPERATURE_MIN_FAHRENHEIT
                    : LANDSAT_SURFACE_TEMPERATURE_MIN_CELSIUS;

            yMax =
                spectralIndex === 'temperature farhenheit'
                    ? LANDSAT_SURFACE_TEMPERATURE_MAX_FAHRENHEIT
                    : LANDSAT_SURFACE_TEMPERATURE_MAX_CELSIUS;
        }

        // y should not go below y min
        y = Math.max(y, yMin);

        // y should not go beyond y max
        y = Math.min(y, yMax);

        const tooltip = `${formatInUTCTimeZone(
            acquisitionDate,
            DATE_FORMAT_TEMPORAL_PROFILE
        )}: ${y.toFixed(2)}`;

        return {
            x: month2month ? d.acquisitionMonth : d.acquisitionDate,
            y,
            tooltip,
        };
    });

    return data;
};

export const useTemporalProfileDataAsChartData = () => {
    const temporalProfileData = useAppSelector(selectTrendToolData);

    const spectralIndex: SpectralIndex = useAppSelector(
        selectSelectedIndex4TrendTool
    ) as SpectralIndex;

    const trendToolOption = useAppSelector(selectTrendToolOption);

    const chartData = useMemo(() => {
        return convertLandsatTemporalProfileData2ChartData(
            temporalProfileData,
            spectralIndex,
            trendToolOption === 'month-to-month'
        );
    }, [temporalProfileData, spectralIndex, trendToolOption]);

    return chartData;
};
