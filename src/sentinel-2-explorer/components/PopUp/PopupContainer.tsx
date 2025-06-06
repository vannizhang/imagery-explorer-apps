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

// import './PopUp.css';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Point from '@arcgis/core/geometry/Point';
import { useAppSelector } from '@shared/store/configureStore';
import {
    // selectActiveAnalysisTool,
    selectAppMode,
    selectQueryParams4MainScene,
    selectQueryParams4SecondaryScene,
} from '@shared/store/ImageryScene/selectors';
import { getMainContent } from './helper';
import { formatInUTCTimeZone } from '@shared/utils/date-time/formatInUTCTimeZone';
import { MapPopup, MapPopupData } from '@shared/components/MapPopup/MapPopup';
import { identify } from '@shared/services/helpers/identify';
import { getPixelValuesFromIdentifyTaskResponse } from '@shared/services/helpers/getPixelValuesFromIdentifyTaskResponse';
import { SENTINEL_2_SERVICE_URL } from '@shared/services/sentinel-2/config';
import { getFormattedSentinel2Scenes } from '@shared/services/sentinel-2/getSentinel2Scenes';
import { DATE_FORMAT } from '@shared/constants/UI';
// import { canBeConvertedToNumber } from '@shared/utils/snippets/canBeConvertedToNumber';

type Props = {
    mapView?: MapView;
};

let controller: AbortController = null;

export const PopupContainer: FC<Props> = ({ mapView }) => {
    const mode = useAppSelector(selectAppMode);

    const queryParams4MainScene = useAppSelector(selectQueryParams4MainScene);

    const queryParams4SecondaryScene = useAppSelector(
        selectQueryParams4SecondaryScene
    );

    const [data, setData] = useState<MapPopupData>();

    const fetchPopupData = async (
        mapPoint: Point,
        clickedOnLeftSideOfSwipeWidget: boolean
    ) => {
        try {
            let queryParams = queryParams4MainScene;

            // in swipe mode, we need to use the query Params based on position of mouse click event
            if (mode === 'swipe') {
                queryParams = clickedOnLeftSideOfSwipeWidget
                    ? queryParams4MainScene
                    : queryParams4SecondaryScene;
            }

            if (controller) {
                controller.abort();
            }

            controller = new AbortController();

            const res = await identify({
                serviceURL: SENTINEL_2_SERVICE_URL,
                point: mapPoint,
                objectIds:
                    mode !== 'dynamic'
                        ? [queryParams?.objectIdOfSelectedScene]
                        : null,
                abortController: controller,
                maxItemCount: 1,
            });

            // console.log(res)

            const features = res?.catalogItems?.features;

            if (!features.length) {
                throw new Error('cannot find sentinel-2 scene');
            }

            const sceneData = getFormattedSentinel2Scenes(features)[0];

            const bandValues: number[] =
                getPixelValuesFromIdentifyTaskResponse(res);

            if (!bandValues) {
                throw new Error('identify task does not return band values');
            }
            // console.log(bandValues)

            const title = `Sentinel-2 | ${formatInUTCTimeZone(
                sceneData.acquisitionDate,
                DATE_FORMAT
            )}`;

            setData({
                // Set the popup's title to the coordinates of the location
                title: title,
                location: mapPoint, // Set the location of the popup to the clicked location
                content: getMainContent(bandValues, mapPoint),
            });
        } catch (error: any) {
            setData({
                title: undefined,
                location: undefined,
                content: undefined,
                error,
            });
        }
    };

    return <MapPopup data={data} mapView={mapView} onOpen={fetchPopupData} />;
};
