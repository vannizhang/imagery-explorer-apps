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

import { getLandsatScenes } from '@shared/services/landsat-level-2/getLandsatScenes';
import { selectMapCenter } from '../Map/selectors';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { landsatScenesUpdated } from './reducer';
import { selectLandsatMissionsToBeExcluded } from './selectors';
import { LandsatScene } from '@typing/imagery-service';
// import {
//     formattedDateString2Unixtimestamp,
//     getYearFromFormattedDateString,
// } from '@shared/utils/date-time/formatDateString';
// import { selectQueryParams4SceneInSelectedMode } from '../ImageryScene/selectors';
import {
    ImageryScene,
    availableImageryScenesUpdated,
} from '../ImageryScene/reducer';
import { DateRange } from '@typing/shared';
import { selectQueryParams4SceneInSelectedMode } from '../ImageryScene/selectors';
import { deduplicateListOfImageryScenes } from '@shared/services/helpers/deduplicateListOfScenes';
import { convertLandsatSceneToImageryScene } from '@shared/services/landsat-level-2/helpers';

let abortController: AbortController = null;
/**
 * Query Landsat Scenes that intersect with center point of map view that were acquired within the user selected acquisition year.
 * @param year use selected acquisition year
 * @returns
 */
export const queryAvailableScenes =
    (acquisitionDateRange: DateRange) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        if (!acquisitionDateRange) {
            return;
        }

        if (abortController) {
            abortController.abort();
        }

        abortController = new AbortController();

        try {
            const { objectIdOfSelectedScene, acquisitionDate } =
                selectQueryParams4SceneInSelectedMode(getState()) || {};

            const center = selectMapCenter(getState());

            const missionsToBeExcluded = selectLandsatMissionsToBeExcluded(
                getState()
            );

            // get scenes that were acquired within the acquisition year
            const landsatScenes = await getLandsatScenes({
                acquisitionDateRange,
                mapPoint: center,
                abortController,
                missionsToBeExcluded,
            });

            // If the year of the acquisition date is different from the input acquisition year, we need to query Landsat scenes acquired on the acquisition date.
            // Why are we doing this? Selecting a different year triggers this function to query available scenes for that year.
            // However, we don't want the Landsat Scene on the map and its information to disappear before a new acquisition date is selected.
            // By adding the scene acquired on the acquisition date, we ensure that the currently selected scene will remain visible until a new acquisition date is chosen.
            // if (
            //     acquisitionDate &&
            //     getYearFromFormattedDateString(acquisitionDate) !==
            //         acquisitionYear
            // ) {
            //     const scenesByAcquisitionDate = await getLandsatScenes({
            //         formattedAcquisitionDate: acquisitionDate,
            //         mapPoint: center,
            //         abortController,
            //         missionsToBeExcluded,
            //     });

            //     for (const scene of scenesByAcquisitionDate) {
            //         scenes.push(scene);
            //     }
            // }

            // // Check if a specific acquisition date is selected and falls outside the range of acquisition dates used avove.
            // // If so, it's necessary to query Landsat scenes acquired on the user-selected date.
            // // This step prevents the disappearance of the currently displayed Landsat Scene and its information
            // // until a new acquisition date is selected.
            // // Including the scene acquired on the selected date guarantees its visibility until a new acquisition date is chosen.
            // if (
            //     acquisitionDate &&
            //     (formattedDateString2Unixtimestamp(acquisitionDate) <
            //         formattedDateString2Unixtimestamp(
            //             acquisitionDateRange.startDate
            //         ) ||
            //         formattedDateString2Unixtimestamp(acquisitionDate) >
            //             formattedDateString2Unixtimestamp(
            //                 acquisitionDateRange.endDate
            //             ))
            // ) {
            //     const scenesByAcquisitionDate = await getLandsatScenes({
            //         acquisitionDate,
            //         mapPoint: center,
            //         abortController,
            //         missionsToBeExcluded,
            //     });

            //     for (const scene of scenesByAcquisitionDate) {
            //         scenes.push(scene);
            //     }
            // }

            // // sort scenes uing acquisition date in an ascending order
            // // which is necessary for us to select between two overlapping scenes in step below
            // scenes.sort((a, b) => a.acquisitionDate - b.acquisitionDate);

            // const landsatScenes: LandsatScene[] = [];

            // for (const currScene of scenes) {
            //     // Get the last Landsat scene in the 'landsatScenes' array
            //     const prevScene = landsatScenes[landsatScenes.length - 1];

            //     // Check if there is a previous scene and its acquisition date matches the current scene.
            //     // We aim to keep only one Landsat scene for each day. When there are two scenes acquired on the same date,
            //     // we prioritize keeping the currently selected scene or the one acquired later.
            //     if (
            //         prevScene &&
            //         prevScene.formattedAcquisitionDate ===
            //             currScene.formattedAcquisitionDate
            //     ) {
            //         // Check if the previous scene is the currently selected scene
            //         // Skip the current iteration if the previous scene is the selected scene
            //         if (prevScene.objectId === objectIdOfSelectedScene) {
            //             continue;
            //         }

            //         // Remove the previous scene from 'landsatScenes' as it was acquired before the current scene
            //         landsatScenes.pop();
            //     }

            //     landsatScenes.push(currScene);
            // }

            // convert list of Landsat scenes to list of imagery scenes
            let imageryScenes: ImageryScene[] = landsatScenes.map(
                (landsatScene: LandsatScene) => {
                    // const {
                    //     objectId,
                    //     name,
                    //     formattedAcquisitionDate,
                    //     acquisitionDate,
                    //     acquisitionYear,
                    //     acquisitionMonth,
                    //     cloudCover,
                    //     satellite,
                    // } = landsatScene;

                    // const imageryScene: ImageryScene = {
                    //     objectId,
                    //     sceneId: name,
                    //     formattedAcquisitionDate,
                    //     acquisitionDate,
                    //     acquisitionYear,
                    //     acquisitionMonth,
                    //     cloudCover,
                    //     satellite,
                    //     customTooltipText: [
                    //         `${Math.ceil(cloudCover * 100)}% Cloudy`,
                    //     ],
                    // };

                    // return imageryScene;

                    return convertLandsatSceneToImageryScene(landsatScene);
                }
            );

            imageryScenes = deduplicateListOfImageryScenes(
                imageryScenes,
                objectIdOfSelectedScene
            );

            dispatch(landsatScenesUpdated(landsatScenes));
            dispatch(availableImageryScenesUpdated(imageryScenes));
        } catch (err) {
            console.error(err);
        }
    };
