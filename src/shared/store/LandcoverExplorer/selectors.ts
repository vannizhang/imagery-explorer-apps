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
import { MIN_MAP_ZOOM_FOR_SENTINEL_2_LAYER } from '@landcover-explorer/constants/map';
import { RootState } from '../configureStore';

/**
 * Select years that will be used to get the Leading and Trailing layers in Swipe Widget
 *
 * @return `[year4LeadingLayer, year4TrailingLayer]`
 */
export const selectYearsForSwipeWidgetLayers = createSelector(
    (state: RootState) => state.LandcoverExplorer.swipeWidget.year4LeadingLayer,
    (state: RootState) =>
        state.LandcoverExplorer.swipeWidget.year4TrailingLayer,
    (year4LeadingLayer, year4TrailingLayer) => {
        return {
            year4LeadingLayer,
            year4TrailingLayer,
        };
    }
);

// /**
//  * Select default values (zoom and center) that will be used to initiate map
//  *
//  * @return `{ zoom: number, cenetr: {lat: number, lon: number} }`
//  */
// export const selectMapCenterAndZoom = createSelector(
//     (state: RootState) => state.LandcoverExplorer.zoom,
//     (state: RootState) => state.LandcoverExplorer.center,
//     (zoom, center) => {
//         return {
//             zoom,
//             center,
//         };
//     }
// );

// export const selectMapExtent = createSelector(
//     (state: RootState) => state.LandcoverExplorer.extent,
//     (extent) => extent
// );

// export const selectMapResolution = createSelector(
//     (state: RootState) => state.LandcoverExplorer.resolution,
//     (resolution) => resolution
// );

// export const selectSwipePosition = createSelector(
//     (state: RootState) => state.LandcoverExplorer.swipeWidget.position,
//     (position) => position
// );

// export const selectShowMapLabel = createSelector(
//     (state: RootState) => state.LandcoverExplorer.showMapLabel,
//     (showMapLabel) => showMapLabel
// );

// export const selectShowTerrain = createSelector(
//     (state: RootState) => state.LandcoverExplorer.showTerrain,
//     (showTerrain) => showTerrain
// );

export const selectIsSentinel2LayerOutOfVisibleRange = createSelector(
    (state: RootState) => state.LandcoverExplorer.shouldShowSentinel2Layer,
    (state: RootState) => state.Map.zoom,
    (shouldShowSentinel2Layer, zoom) => {
        return (
            shouldShowSentinel2Layer && zoom < MIN_MAP_ZOOM_FOR_SENTINEL_2_LAYER
        );
    }
);
export const selectSentinel2AquisitionMonth = (state: RootState) =>
    state.LandcoverExplorer.sentinel2AquisitionMonth;

export const selectMapMode = (state: RootState) => state.LandcoverExplorer.mode;

export const selectYear = (state: RootState) => state.LandcoverExplorer.year;

export const selectShowInfoPanel = (state: RootState) =>
    state.LandcoverExplorer.showInfoPanel;

export const selectShowSwipeWidgetYearIndicator = (state: RootState) =>
    state.LandcoverExplorer.showSwipeWidgetYearIndicator;

export const selectShouldShowSentinel2Layer = (state: RootState) =>
    state.LandcoverExplorer.shouldShowSentinel2Layer;

export const selectActiveLandCoverType = (state: RootState) =>
    state.LandcoverExplorer.activeLandCoverType;

export const selectSentinel2RasterFunction = (state: RootState) =>
    state.LandcoverExplorer.sentinel2RasterFunction;
