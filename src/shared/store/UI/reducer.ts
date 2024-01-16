import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

export type AnimationStatus = 'loading' | 'playing' | 'pausing';

export type TooltipData = {
    /**
     * title of the tooltip
     */
    title?: string;
    /**
     * text content of the tooltip
     */
    content?: string;
    /**
     * tooltip of the Renderer (Raster Function) Component might include legend image
     */
    legendImage?: string;
};

export type UIState = {
    /**
     * if true, hide bottom panel
     */
    hideBottomPanel?: boolean;
    /**
     * If true, show About This App Modal
     */
    shouldShowAboutThisApp?: boolean;
    /**
     * status of the Animation mode
     */
    animationStatus?: AnimationStatus;
    /**
     * speed of Animation in milliseconds
     */
    animationSpeed?: number;
    /**
     * if true, show animation download panel so user can save the current animation into a .mp4 file
     */
    showDownloadAnimationPanel: boolean;
    /**
     * The X Position (relative to page) of Tooltip for the Bottom Panel
     */
    tooltipXPosition?: number;
    /**
     * The data that will be used to populate the Tooltip component.
     */
    tooltipData?: TooltipData;
    /**
     * name of selected interesting place
     */
    nameOfSelectedInterestingPlace: string;
};

export const initialUIState: UIState = {
    hideBottomPanel: false,
    shouldShowAboutThisApp: false,
    animationStatus: null,
    animationSpeed: 400,
    showDownloadAnimationPanel: false,
    tooltipXPosition: 0,
    tooltipData: null,
    nameOfSelectedInterestingPlace: '',
};

const slice = createSlice({
    name: 'UI',
    initialState: initialUIState,
    reducers: {
        bottomPanelToggled: (state, action: PayloadAction<boolean>) => {
            state.hideBottomPanel = action.payload;
        },
        shouldShowAboutThisAppToggled: (state) => {
            state.shouldShowAboutThisApp = !state.shouldShowAboutThisApp;
        },
        showDownloadAnimationPanelChanged: (
            state,
            action: PayloadAction<boolean>
        ) => {
            state.showDownloadAnimationPanel = action.payload;
        },
        showDownloadAnimationPanelToggled: (state) => {
            state.showDownloadAnimationPanel =
                !state.showDownloadAnimationPanel;
        },
        animationStatusChanged: (
            state,
            action: PayloadAction<AnimationStatus>
        ) => {
            state.animationStatus = action.payload;
        },
        animationSpeedChanged: (state, action: PayloadAction<number>) => {
            state.animationSpeed = action.payload;
        },
        tooltipXPositionChanged: (state, action: PayloadAction<number>) => {
            state.tooltipXPosition = action.payload;
        },
        tooltipDataChanged: (state, action: PayloadAction<TooltipData>) => {
            state.tooltipData = action.payload;
        },
        nameOfSelectedInterestingPlaceChanged: (
            state,
            action: PayloadAction<string>
        ) => {
            state.nameOfSelectedInterestingPlace = action.payload;
        },
    },
});

const { reducer } = slice;

export const {
    bottomPanelToggled,
    shouldShowAboutThisAppToggled,
    showDownloadAnimationPanelChanged,
    showDownloadAnimationPanelToggled,
    animationStatusChanged,
    animationSpeedChanged,
    tooltipDataChanged,
    tooltipXPositionChanged,
    nameOfSelectedInterestingPlaceChanged,
} = slice.actions;

export default reducer;
