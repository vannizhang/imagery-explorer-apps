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

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

// export const selectLandsatScenes = createSelector(
//     (state: RootState) => state.Landsat.landsatScenes,
//     (landsatScenes) => {
//         const { objectIds, byObjectId } = landsatScenes;
//         return objectIds.map((objectId) => byObjectId[objectId]);
//     }
// );

export const selectAvailableScenesByObjectId = (state: RootState) => {
    return state.Landsat.landsatScenes.byObjectId;
};

export const selectLandsatMissionsToBeExcluded = (state: RootState) => {
    return state.Landsat.missionsToBeExcluded;
};
