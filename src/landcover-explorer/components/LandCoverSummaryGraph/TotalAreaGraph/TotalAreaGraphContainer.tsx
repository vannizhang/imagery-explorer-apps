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

import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch } from '@shared/store/configureStore';
import { useAppSelector } from '@shared/store/configureStore';
import {
    getLandCoverAreaByYear,
    // getLandCoverChangeInAcres,
    LandCoverArea,
} from '@shared/services/helpers/getLandcoverSummaryGraphData';
// import { getLandCoverClassificationShortName } from '@shared/services/sentinel-2-10m-landcover/rasterAttributeTable';
import { selectYear } from '@shared/store/LandcoverExplorer/selectors';
import { updateTooltipData } from '@shared/store/UI/thunks';
import TotalsGraph from './TotalAreaGraph';
import { numberWithCommas } from 'helper-toolkit-ts';
import { BarChartDataItem } from '@vannizhang/react-d3-charts/dist/BarChart/types';
import {
    selectMapExtent,
    selectMapResolution,
    selectMapZoom,
} from '@shared/store/Map/selectors';
import { useTranslation } from 'react-i18next';
// import { APP_NAME } from '@shared/config';

import { LandcoverClassificationData } from '@typing/landcover';

type Props = {
    /**
     * URL of the Land Cover service to fetch data from.
     */
    serviceUrl: string;
    /**
     * Raster function to apply when fetching data.
     */
    rasterFunction: string;
    /**
     * Map of land cover classification data by pixel values.
     */
    mapOfLandCoverClassificationPixelValues: Map<
        number,
        LandcoverClassificationData
    >;
    /**
     * Szie of the chart
     */
    scale?: 's' | 'm';
};

export const TotalAreaGraphContainer: FC<Props> = ({
    serviceUrl,
    rasterFunction,
    mapOfLandCoverClassificationPixelValues,
    scale = 'm',
}) => {
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    // const { zoom } = useAppSelector(selectMapCenterAndZoom);

    const zoom = useAppSelector(selectMapZoom);

    const resolution = useAppSelector(selectMapResolution);

    const extent = useAppSelector(selectMapExtent);

    const year = useAppSelector(selectYear);

    const [chartData, setChartData] = useState<BarChartDataItem[]>();

    const [landCoverTotalsData, setLandCoverTotalsData] =
        useState<LandCoverArea[]>();

    const landCoverTotalsDataRef = useRef<LandCoverArea[]>();

    const fetchData = async (): Promise<void> => {
        if (!resolution || !extent || !year) {
            return undefined;
        }

        try {
            const res = await getLandCoverAreaByYear({
                extent,
                resolution,
                year,
                serviceUrl,
                rasterFunction,
                mapOfLandCoverClassificationPixelValues,
            });

            setLandCoverTotalsData(res);
        } catch (err) {
            console.log(err);
        }

        // setLandCoverChangeData(res);
    };

    const getChartData = () => {
        const data: BarChartDataItem[] = landCoverTotalsData.map((d) => {
            const { area, areaInPercentage, landcoverClassificationData } = d;

            const { ClassName, Description, Color, shortName } =
                landcoverClassificationData;

            const [R, G, B] = Color;

            // const formatedArea = abbreviateNumber(area);

            return {
                x: shortName, //getLandCoverClassificationShortName(ClassName),
                y: area,
                fill: `rgb(${R}, ${G}, ${B})`,
                label: ClassName,
                labelOnTop: `${areaInPercentage}%`,
            };
        });

        setChartData(data);
    };

    const openTooltipForItemOnHover = (idx: number) => {
        if (
            !landCoverTotalsDataRef.current ||
            !landCoverTotalsDataRef.current[idx]
        ) {
            dispatch(updateTooltipData(null));
            return;
        }

        const data = landCoverTotalsDataRef.current[idx];

        const { area } = data;

        // const { ClassName } = landcoverClassificationData;

        const tooltipData = {
            content: `${numberWithCommas(area)} acres in ${year}`,
        };

        dispatch(updateTooltipData(tooltipData));
    };

    useEffect(() => {
        if (landCoverTotalsData) {
            getChartData();
        }

        landCoverTotalsDataRef.current = landCoverTotalsData;
    }, [landCoverTotalsData]);

    useEffect(() => {
        // if (zoom < MIN_MAP_ZOOM_FOR_COMPUTE_HISTOGRAM) {
        //     return;
        // }

        fetchData();
    }, [resolution, extent, year, zoom]);

    return (
        <TotalsGraph
            data={chartData}
            itemOnHover={openTooltipForItemOnHover}
            scale={scale}
        />
    );
};

export default TotalAreaGraphContainer;
