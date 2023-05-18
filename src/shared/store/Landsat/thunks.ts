import { batch } from 'react-redux';
import {
    LandsatScene,
    getLandsatScenes,
} from '../../../landsat-explorer/services/landsat-2/getLandsatScenes';
import { selectMapCenter } from '../Map/selectors';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import {
    QueryParams4LandsatScene,
    availableScenesUpdated,
    queryParams4MainSceneChanged,
    queryParams4ScenesInAnimationModeChanged,
    queryParams4SceneInSwipeModeChanged,
    queryParams4SceneInSelectedAnimationFrameChanged,
    selectedAnimationFrameIdChanged,
} from './reducer';
import {
    selectAppMode,
    selectQueryParams4SceneInNewAnimationFrame,
    selectQueryParams4SceneInSelectedMode,
    selectQueryParams4ScenesInAnimateMode,
} from './selectors';
import { generate } from 'shortid';

/**
 * Query Landsat Scenes that intersect with center point of map view that were acquired within the user selected acquisition year.
 * @returns
 */
export const queryAvailableScenes =
    () => async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            const { acquisitionYear, cloudCover } =
                selectQueryParams4SceneInSelectedMode(getState());

            const center = selectMapCenter(getState());

            const scenes = await getLandsatScenes({
                year: acquisitionYear,
                mapPoint: center,
                cloudCover,
            });

            const availableScenes: LandsatScene[] = [];

            for (const scene of scenes) {
                const { formattedAcquisitionDate } = scene;

                // Only need to keep the one Landsat Scene for each day
                if (
                    availableScenes.length &&
                    availableScenes[availableScenes.length - 1]
                        .formattedAcquisitionDate == formattedAcquisitionDate
                ) {
                    continue;
                }

                availableScenes.push(scene);
            }

            batch(() => {
                dispatch(availableScenesUpdated(availableScenes));
            });
        } catch (err) {
            console.error(err);
        }
    };

/**
 * update query params that will be used to find the Landsat Scene in the selected mode
 * @param updatedQueryParams
 * @returns
 */
export const updateQueryParams4SceneInSelectedMode =
    (updatedQueryParams: QueryParams4LandsatScene) =>
    (dispatch: StoreDispatch, getState: StoreGetState) => {
        const mode = selectAppMode(getState());

        if (mode === 'find a scene') {
            dispatch(queryParams4MainSceneChanged(updatedQueryParams));
            return;
        }

        if (mode === 'swipe') {
            dispatch(queryParams4SceneInSwipeModeChanged(updatedQueryParams));
            return;
        }

        if (mode === 'animate') {
            dispatch(
                queryParams4SceneInSelectedAnimationFrameChanged(
                    updatedQueryParams
                )
            );
        }
    };

export const updateRasterFunctionName =
    (rasterFunctionName: string) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            const queryParams = selectQueryParams4SceneInSelectedMode(
                getState()
            );

            // it is possible that there won't be any scene in Animation mode
            // before user adds a frame. Therefore we should just abort
            if (!queryParams) {
                return;
            }

            const updatedQueryParams: QueryParams4LandsatScene = {
                ...queryParams,
                rasterFunctionName,
            };

            dispatch(updateQueryParams4SceneInSelectedMode(updatedQueryParams));
        } catch (err) {
            console.error(err);
        }
    };

export const updateObjectIdOfSelectedScene =
    (objectIdOfSelectedScene: number) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            const queryParams = selectQueryParams4SceneInSelectedMode(
                getState()
            );

            if (!queryParams) {
                return;
            }

            const updatedQueryParams: QueryParams4LandsatScene = {
                ...queryParams,
                objectIdOfSelectedScene,
            };

            dispatch(updateQueryParams4SceneInSelectedMode(updatedQueryParams));
        } catch (err) {
            console.error(err);
        }
    };

export const updateAcquisitionYear =
    (acquisitionYear: number) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            const queryParams = selectQueryParams4SceneInSelectedMode(
                getState()
            );

            if (!queryParams) {
                return;
            }

            const updatedQueryParams: QueryParams4LandsatScene = {
                ...queryParams,
                acquisitionYear,
            };

            dispatch(updateQueryParams4SceneInSelectedMode(updatedQueryParams));
        } catch (err) {
            console.error(err);
        }
    };

export const updateCloudCover =
    (cloudCover: number) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            const queryParams = selectQueryParams4SceneInSelectedMode(
                getState()
            );

            if (!queryParams) {
                return;
            }

            const updatedQueryParams: QueryParams4LandsatScene = {
                ...queryParams,
                cloudCover,
            };

            dispatch(updateQueryParams4SceneInSelectedMode(updatedQueryParams));
        } catch (err) {
            console.error(err);
        }
    };

// export const updateAcquisitionMonth =
//     (acquisitionMonth: number) =>
//     async (dispatch: StoreDispatch, getState: StoreGetState) => {
//         try {
//             const queryParams = selectQueryParams4SceneInSelectedMode(
//                 getState()
//             );

//             const updatedQueryParams: QueryParams4LandsatScene = {
//                 ...queryParams,
//                 acquisitionMonth,
//             };

//             dispatch(updateLandsatQueryParams4SelectedMode(updatedQueryParams));
//         } catch (err) {
//             console.error(err);
//         }
//     };

export const updateAcquisitionDate =
    (acquisitionDate: string) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            const queryParams = selectQueryParams4SceneInSelectedMode(
                getState()
            );

            if (!queryParams) {
                return;
            }

            const updatedQueryParams: QueryParams4LandsatScene = {
                ...queryParams,
                acquisitionDate,
            };

            dispatch(updateQueryParams4SceneInSelectedMode(updatedQueryParams));
        } catch (err) {
            console.error(err);
        }
    };

export const addAnimationFrame =
    () => async (dispatch: StoreDispatch, getState: StoreGetState) => {
        const queryParams4ExistingScenes =
            selectQueryParams4ScenesInAnimateMode(getState());

        const queryParams4SceneInNewFrame =
            selectQueryParams4SceneInNewAnimationFrame(getState());

        const idOfFrame2BeAdded = generate();

        batch(() => {
            dispatch(
                queryParams4ScenesInAnimationModeChanged([
                    ...queryParams4ExistingScenes,
                    {
                        ...queryParams4SceneInNewFrame,
                        animationFrameId: idOfFrame2BeAdded,
                    },
                ])
            );

            dispatch(selectedAnimationFrameIdChanged(idOfFrame2BeAdded));
        });
    };

export const removeAnimationFrame =
    (idOfFrame2BeRemoved: string) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        const queryParams4ExistingScenes =
            selectQueryParams4ScenesInAnimateMode(getState());

        dispatch(
            queryParams4ScenesInAnimationModeChanged(
                queryParams4ExistingScenes.filter(
                    (d) => d.animationFrameId !== idOfFrame2BeRemoved
                )
            )
        );

        // should update frameIdOfSelectedQueryParams if the one get removed is the selected one
        // dispatch(
        //     selectedAnimationFrameIdChanged(
        //         idOfFrame2BeAdded
        //     )
        // );
    };
