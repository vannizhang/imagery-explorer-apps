import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';
import { getCurrentYear } from '@shared/utils/date-time/getCurrentDateTime';
// import { getCurrentYear } from '@shared/utils/date-time/getCurrentYear';

/**
 * modes that the user can use to explore the imagery layer/scene
 */
export type AppMode =
    | 'dynamic' // view the mosaicked scenes
    | 'find a scene' // find and explorer a single scene
    | 'swipe' // compare two scenes side by side using Swipe widget
    | 'animate' // animate a list of scenes
    | 'analysis' // analyze the selected scene
    | 'spectral sampling'; // sampling data from a list of scenes

/**
 * the imagery explorer app supports these analysis tools
 */
export type AnalysisTool = 'mask' | 'trend' | 'spectral' | 'change';

/**
 * Query Params and Rendering Options for a Imagery Scene (e.g. Landsat or Sentinel-2)
 */
export type QueryParams4ImageryScene = {
    /**
     * User selected acquisition date in format of `YYYY-MM-DD`.
     * This acquisition date will be used to select a Imagery Scene from `availableScenes` array.
     */
    acquisitionDate?: string;
    // /**
    //  * use selected cloud coverage threshold ranges from 0 to 1
    //  */
    // cloudCover?: number;
    /**
     * name of raster function that will be used to render the Imagery scene
     */
    rasterFunctionName?: string;
    /**
     * Object Id of selected Imagery scene.
     *
     * The Object ID of the selected Imagery scene will be automatically determined based on the changes in the `acquisitionDate` or `availableScenes`.
     * We will use the object ID of the Imagery scene from the `availableScenes` that was acquired on the `acquisitionDate`.
     * If no Imagery scene was acquired on that date, the object ID will be reset to null.
     */
    objectIdOfSelectedScene?: number;
    /**
     * unique id of the query params that is associated with this Imagery Scene
     */
    uniqueId?: string;
    /**
     * This property represents the acquisition year inherited from the previously selected item in the listOfQueryParams.
     *
     * Normally, the current year is used as the default acquisition year for new query parameters.
     * However, to enhance the user experience in animation mode, we retain the acquisition year from the previous frame.
     * This ensures a seamless workflow, allowing users to seamlessly continue their work on the same year as the prior animation frame.
     */
    inheritedAcquisitionYear?: number;
};

export type ImageryScene = {
    objectId: number;
    /**
     * Unique Identifier of this imagery scene
     * @example LC08_L1GT_029030_20151209_20160131_01_RT
     */
    sceneId: string;
    /**
     * acquisitionDate as a string in ISO format (YYYY-MM-DD).
     */
    formattedAcquisitionDate: string;
    /**
     * acquisitionDate in unix timestamp
     */
    acquisitionDate: number;
    /**
     * year when this scene was acquired
     */
    acquisitionYear: number;
    /**
     * month when this scene was acquired
     */
    acquisitionMonth: number;
    /**
     * name of the satellite that captured this imagery scene (e.g. 'Landsat 8')
     */
    satellite: string;
    /**
     * percent of cloud cover, the value ranges from 0 - 1
     */
    cloudCover: number;
};

export type ImageryScenesState = {
    /**
     * mode to be used to visualize and compare the imagery scenes
     */
    mode: AppMode;
    /**
     * tool to be used to analyze the imagery scene
     */
    tool: AnalysisTool;
    /**
     * query params for the Imagery scene to be used in "Find a Scene" mode; and
     * on the left side of the "Swipe" mode
     */
    queryParams4MainScene: QueryParams4ImageryScene;
    /**
     * query params for the Imagery scene that will be used on the right side of the "swipe" mode
     */
    queryParams4SecondaryScene: QueryParams4ImageryScene;
    /**
     * if true, user has selected the secondary scene, this happens when user selects the "right" side of
     * of the Swipe Mode, or selects the "Scene B" of the Change tool
     */
    isSecondarySceneActive: boolean;
    /**
     * query parameters for list of Imagery scenes that will be used in Animation Mode, Spectral Sampling Mode and etc.
     */
    queryParamsList: {
        byId?: {
            [key: string]: QueryParams4ImageryScene;
        };
        ids?: string[];
        /**
         * Id of the selected item. This Id helps identify which item should be updated.
         */
        selectedItemID?: string;
    };
    /**
     * List of imagery scenes that intersect with center point of map view and were acquired within the user selected acquisition year.
     */
    availableImageryScenes: {
        byObjectId: {
            [key: number]: ImageryScene;
        };
        objectIds: number[];
    };
    /**
     * user selected cloud coverage threshold, the value ranges from 0 to 1
     */
    cloudCover: number;
    /**
     * user selected acquisiton year that will be used to find list of available imagery scenes
     */
    acquisitionYear: number;
};

export const DefaultQueryParams4ImageryScene: QueryParams4ImageryScene = {
    acquisitionDate: '',
    rasterFunctionName: '',
    objectIdOfSelectedScene: null,
    uniqueId: null,
};

export const initialImagerySceneState: ImageryScenesState = {
    mode: 'dynamic',
    tool: 'mask',
    queryParams4MainScene: {
        ...DefaultQueryParams4ImageryScene,
    },
    queryParams4SecondaryScene: {
        ...DefaultQueryParams4ImageryScene,
    },
    isSecondarySceneActive: false,
    queryParamsList: {
        byId: {},
        ids: [],
        selectedItemID: null,
    },
    availableImageryScenes: {
        byObjectId: {},
        objectIds: [],
    },
    cloudCover: 0.5,
    acquisitionYear: getCurrentYear(),
};

const slice = createSlice({
    name: 'ImageryScenes',
    initialState: initialImagerySceneState,
    reducers: {
        queryParams4MainSceneChanged: (
            state,
            action: PayloadAction<QueryParams4ImageryScene>
        ) => {
            state.queryParams4MainScene = action.payload;
        },
        queryParams4SecondarySceneChanged: (
            state,
            action: PayloadAction<QueryParams4ImageryScene>
        ) => {
            state.queryParams4SecondaryScene = action.payload;
        },
        modeChanged: (state, action: PayloadAction<AppMode>) => {
            state.mode = action.payload;
        },
        isSecondarySceneActiveToggled: (
            state,
            action: PayloadAction<boolean>
        ) => {
            state.isSecondarySceneActive = action.payload;
        },
        selectedItemIdOfQueryParamsListChanged: (
            state,
            action: PayloadAction<string>
        ) => {
            state.queryParamsList.selectedItemID = action.payload;
        },
        queryParamsListChanged: (
            state,
            action: PayloadAction<{
                queryParams: QueryParams4ImageryScene[];
                selectedItemID: string;
            }>
        ) => {
            const byId: {
                [key: string]: QueryParams4ImageryScene;
            } = {};
            const ids: string[] = [];

            const { selectedItemID, queryParams } = action.payload;

            for (const item of queryParams) {
                const { uniqueId } = item;

                if (!uniqueId) {
                    continue;
                }

                ids.push(uniqueId);
                byId[uniqueId] = item;
            }

            state.queryParamsList = {
                byId,
                ids,
                selectedItemID,
            };
        },
        queryParams4SelectedItemInListChanged: (
            state,
            action: PayloadAction<QueryParams4ImageryScene>
        ) => {
            const itemId = state.queryParamsList.selectedItemID;
            state.queryParamsList.byId[itemId] = action.payload;
        },
        cloudCoverChanged: (state, action: PayloadAction<number>) => {
            state.cloudCover = action.payload;
        },
        acquisitionYearChanged: (state, action: PayloadAction<number>) => {
            state.acquisitionYear = action.payload;
        },
        activeAnalysisToolChanged: (
            state,
            action: PayloadAction<AnalysisTool>
        ) => {
            state.tool = action.payload;
        },
        availableImageryScenesUpdated: (
            state,
            action: PayloadAction<ImageryScene[]>
        ) => {
            const objectIds: number[] = [];

            const byObjectId: {
                [key: number]: ImageryScene;
            } = {};

            for (const scene of action.payload) {
                const { objectId } = scene;

                objectIds.push(objectId);
                byObjectId[objectId] = scene;
            }

            state.availableImageryScenes = {
                objectIds,
                byObjectId,
            };
        },
    },
});

const { reducer } = slice;

export const {
    // availableScenesUpdated,
    queryParams4MainSceneChanged,
    queryParams4SecondarySceneChanged,
    modeChanged,
    isSecondarySceneActiveToggled,
    selectedItemIdOfQueryParamsListChanged,
    queryParamsListChanged,
    queryParams4SelectedItemInListChanged,
    cloudCoverChanged,
    activeAnalysisToolChanged,
    availableImageryScenesUpdated,
    acquisitionYearChanged,
} = slice.actions;

export default reducer;
