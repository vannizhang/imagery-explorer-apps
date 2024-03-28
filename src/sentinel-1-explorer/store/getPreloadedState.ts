/* Copyright 2024 Esri
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

// import { PartialRootState } from './configureStore';

import { initialMapState, MapState } from '@shared/store/Map/reducer';
import {
    getAnimationSpeedFromHashParams,
    getChangeCompareToolDataFromHashParams,
    getHashParamValueByKey,
    getMapCenterFromHashParams,
    getMaskToolDataFromHashParams,
    getQueryParams4MainSceneFromHashParams,
    getQueryParams4ScenesInAnimationFromHashParams,
    getQueryParams4SecondarySceneFromHashParams,
    getSpectralProfileToolDataFromHashParams,
    getTemporalProfileToolDataFromHashParams,
} from '@shared/utils/url-hash-params';
import { MAP_CENTER, MAP_ZOOM } from '@shared/constants/map';
// import { initialUIState, UIState } from './UI/reducer';
import {
    AnalysisTool,
    AppMode,
    DefaultQueryParams4ImageryScene,
    initialImagerySceneState,
    ImageryScenesState,
    QueryParams4ImageryScene,
    // QueryParams4ImageryScene,
} from '@shared/store/ImageryScene/reducer';
import { IS_MOBILE_DEVICE } from '@shared/constants/UI';
import { initialUIState, UIState } from '@shared/store/UI/reducer';
// import {
//     MaskToolState,
//     initialMaskToolState,
// } from '@shared/store/MaskTool/reducer';
// import {
//     TrendToolState,
//     initialTrendToolState,
// } from '@shared/store/TrendTool/reducer';
// import {
//     initialSpectralProfileToolState,
//     SpectralProfileToolState,
// } from '@shared/store/SpectralProfileTool/reducer';
// import {
//     ChangeCompareToolState,
//     initialChangeCompareToolState,
// } from '@shared/store/ChangeCompareTool/reducer';
import { initialLandsatState } from '@shared/store/Landsat/reducer';
import { PartialRootState } from '@shared/store/configureStore';
import { Sentinel1FunctionName } from '@shared/services/sentinel-1/config';
// import { getRandomElement } from '@shared/utils/snippets/getRandomElement';

/**
 * Map location info that contains center and zoom info from URL Hash Params
 */
const mapLocationFromHashParams = getMapCenterFromHashParams();

// /**
//  * Use the location of a randomly selected interesting place if there is no map location info
//  * found in the URL hash params.
//  */
// const randomInterestingPlace = !mapLocationFromHashParams
//     ? getRandomElement([])
//     : null;

const getPreloadedMapState = (): MapState => {
    const mapLocation = mapLocationFromHashParams;

    // if (!mapLocation) {
    //     mapLocation = randomInterestingPlace?.location;
    // }

    // show map labels if there is no `hideMapLabels` in hash params
    const showMapLabel = getHashParamValueByKey('hideMapLabels') === null;

    // show terrain if there is no `hideTerrain` in hash params
    const showTerrain = getHashParamValueByKey('hideTerrain') === null;

    const showBasemap = getHashParamValueByKey('hideBasemap') === null;

    return {
        ...initialMapState,
        center: mapLocation?.center || MAP_CENTER,
        zoom: mapLocation?.zoom || MAP_ZOOM,
        showMapLabel,
        showTerrain,
        showBasemap,
    };
};

const getPreloadedImageryScenesState = (): ImageryScenesState => {
    let mode: AppMode =
        (getHashParamValueByKey('mode') as AppMode) || 'dynamic';

    // user is only allowed to use the "dynamic" mode when using mobile device
    if (IS_MOBILE_DEVICE) {
        mode = 'dynamic';
    }

    const defaultRasterFunction: Sentinel1FunctionName = 'Sentinel-1 RGB dB';

    // Attempt to extract query parameters from the URL hash.
    // If not found, fallback to using the default values along with the raster function from a randomly selected interesting location,
    // which will serve as the map center.
    const queryParams4MainScene = getQueryParams4MainSceneFromHashParams() || {
        ...DefaultQueryParams4ImageryScene,
        rasterFunctionName: defaultRasterFunction,
        // randomInterestingPlace?.renderer || defaultRasterFunction,
    };

    const queryParams4SecondaryScene =
        getQueryParams4SecondarySceneFromHashParams() || {
            ...DefaultQueryParams4ImageryScene,
            rasterFunctionName: defaultRasterFunction,
        };

    const queryParams4ScenesInAnimation =
        getQueryParams4ScenesInAnimationFromHashParams() || [];

    const queryParamsById: {
        [key: string]: QueryParams4ImageryScene;
    } = {};

    const tool = getHashParamValueByKey('tool') as AnalysisTool;

    for (const queryParams of queryParams4ScenesInAnimation) {
        queryParamsById[queryParams.uniqueId] = queryParams;
    }

    return {
        ...initialImagerySceneState,
        mode,
        tool: tool || 'mask',
        queryParams4MainScene,
        queryParams4SecondaryScene,
        queryParamsList: {
            byId: queryParamsById,
            ids: queryParams4ScenesInAnimation.map((d) => d.uniqueId),
            selectedItemID: queryParams4ScenesInAnimation[0]
                ? queryParams4ScenesInAnimation[0].uniqueId
                : null,
        },
        // idOfSelectedItemInListOfQueryParams: queryParams4ScenesInAnimation[0]
        //     ? queryParams4ScenesInAnimation[0].uniqueId
        //     : null,
    };
};

const getPreloadedUIState = (): UIState => {
    const animationSpeed = getAnimationSpeedFromHashParams();

    const proloadedUIState: UIState = {
        ...initialUIState,
        // nameOfSelectedInterestingPlace: randomInterestingPlace?.name || '',
    };

    if (animationSpeed) {
        proloadedUIState.animationSpeed = animationSpeed;
        proloadedUIState.animationStatus = 'loading';
    }

    return proloadedUIState;
};

export const getPreloadedState = async (): Promise<PartialRootState> => {
    // get default raster function and location and pass to the getPreloadedMapState, getPreloadedUIState and getPreloadedImageryScenesState

    return {
        Map: getPreloadedMapState(),
        UI: getPreloadedUIState(),
        Landsat: {
            ...initialLandsatState,
        },
        ImageryScenes: getPreloadedImageryScenesState(),
    };
};