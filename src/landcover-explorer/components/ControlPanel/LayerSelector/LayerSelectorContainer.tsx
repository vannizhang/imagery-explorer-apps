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

import React, { useEffect } from 'react';
import { useAppDispatch } from '@shared/store/configureStore';
import { useAppSelector } from '@shared/store/configureStore';
import { shouldShowSatelliteImageryLayerToggled } from '@shared/store/LandcoverExplorer/reducer';
import { selectShouldShowSatelliteImageryLayer } from '@shared/store/LandcoverExplorer/selectors';
// import {
//     showDownloadPanelToggled,
//     showSaveWebMapPanelToggled,
// } from '@shared/store/UI/reducer';
import { selectAnimationStatus } from '@shared/store/UI/selectors';
import { saveshowImageryLayerToHashParams } from '@landcover-explorer/utils/URLHashParams';
import LayerSelector from './LayerSelector';

export const LayerSelectorContainer = () => {
    const dispatch = useAppDispatch();

    const animationMode = useAppSelector(selectAnimationStatus);

    const shouldShowSentinel2Layer = useAppSelector(
        selectShouldShowSatelliteImageryLayer
    );

    useEffect(() => {
        saveshowImageryLayerToHashParams(shouldShowSentinel2Layer);
    }, [shouldShowSentinel2Layer]);

    return (
        <LayerSelector
            shouldShowSentinel2Layer={shouldShowSentinel2Layer}
            disabled={animationMode !== null}
            imageryButtonOnClick={() => {
                dispatch(shouldShowSatelliteImageryLayerToggled(true));
            }}
            landcoverButtonOnClick={() => {
                dispatch(shouldShowSatelliteImageryLayerToggled(false));
            }}
            // downloadLandcoverButtonOnClick={() => {
            //     dispatch(showDownloadPanelToggled(true));
            // }}
            // saveWebMapButtonOnClick={() => {
            //     dispatch(showSaveWebMapPanelToggled());
            // }}
        />
    );
};

export default LayerSelectorContainer;
