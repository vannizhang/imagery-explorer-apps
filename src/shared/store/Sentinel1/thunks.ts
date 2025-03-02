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

import { selectMapCenter } from '../Map/selectors';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { sentinel1ScenesUpdated } from './reducer';
import {
    Sentinel1OrbitDirection,
    Sentinel1Scene,
} from '@typing/imagery-service';
import {
    ImageryScene,
    availableImageryScenesUpdated,
} from '../ImageryScene/reducer';
import { DateRange } from '@typing/shared';
import { selectQueryParams4SceneInSelectedMode } from '../ImageryScene/selectors';
import { getSentinel1Scenes } from '@shared/services/sentinel-1/getSentinel1Scenes';
import { convert2ImageryScenes } from '@shared/services/sentinel-1/covert2ImageryScenes';
import { deduplicateListOfImageryScenes } from '@shared/services/helpers/deduplicateListOfScenes';
import { selectSentinel1OrbitDirection } from './selectors';

type QueryAvailableSentinel1ScenesParams = {
    /**
     * user selected date range to query sentinel-1 scenes
     */
    acquisitionDateRange: DateRange;
    /**
     * relative orbit of the sentinel-1 scenes to query
     */
    relativeOrbit?: string;
};

let abortController: AbortController = null;

/**
 * Query Sentinel-1 Scenes that intersect with center point of map view that were acquired within the user selected acquisition year.
 * @param acquisitionDateRange user selected acquisition date range
 * @param relativeOrbit relative orbit of sentinel-1 scenes
 * @returns
 */
export const queryAvailableSentinel1Scenes =
    ({
        acquisitionDateRange,
        relativeOrbit,
    }: QueryAvailableSentinel1ScenesParams) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        if (!acquisitionDateRange) {
            return;
        }

        if (abortController) {
            abortController.abort();
        }

        abortController = new AbortController();

        const storeState = getState();

        try {
            const { objectIdOfSelectedScene, acquisitionDate } =
                selectQueryParams4SceneInSelectedMode(storeState) || {};

            const orbitDirection = selectSentinel1OrbitDirection(storeState);

            const center = selectMapCenter(getState());

            // get scenes that were acquired within the acquisition year
            const scenes = await getSentinel1Scenes({
                acquisitionDateRange,
                // orbitDirection,
                relativeOrbit,
                mapPoint: center,
                abortController,
            });

            // convert list of Sentinel-1 scenes to list of imagery scenes
            let imageryScenes: ImageryScene[] = convert2ImageryScenes(
                scenes,
                orbitDirection
            );

            // deduplicates the list based on acquisition date, keeping only one scene per day
            imageryScenes = deduplicateListOfImageryScenes(
                imageryScenes,
                objectIdOfSelectedScene
            );

            dispatch(sentinel1ScenesUpdated(scenes));
            dispatch(availableImageryScenesUpdated(imageryScenes));
        } catch (err) {
            console.error(err.message);
        }
    };
