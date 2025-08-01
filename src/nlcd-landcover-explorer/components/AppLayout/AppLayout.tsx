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

import React from 'react';
import { AppHeader } from '@shared/components/AppHeader';
import { APP_NAME, appConfig } from '@shared/config';
import { useSaveAppState2HashParams } from '@landcover-explorer/hooks/useSaveAppState2HashParams';
import { useRevalidateToken } from '@shared/hooks/useRevalidateToken';
import { useTranslation } from 'react-i18next';
import { AboutNLCDLandcoverExplorer } from '../About/About';
import BottomPanel from '@shared/components/BottomPanel/BottomPanel';
import ErrorBoundary from '@shared/components/ErrorBoundary/ErrorBoundary';
import { NLCDLandcoverMapViewContainer } from '../MapView';

import { LandcoverExplorerLayerSelector } from '@landcover-explorer/components/ControlPanel/LayerSelector';
import { LandcoverExplorerModeSelector } from '@landcover-explorer/components/ControlPanel/ModeSelector';
import { NLCDTimeSelector } from '../TimeSelector/NLCDTimeSelector';
import { useAppSelector } from '@shared/store/configureStore';
import { selectShouldShowSatelliteImageryLayer } from '@shared/store/LandcoverExplorer/selectors';
import { NLCDClassificationList } from '../ClassificationList/NLCDClassificationList';
import { NLCDLandCoverSummaryGraph } from '../NLCDLandCoverSummaryGraph/NLCDLandCoverSummaryGraph';
import { LandsatRenderersList } from '../LandsatRenderersList/LandsatRenderersList';
import { IS_MOBILE_DEVICE } from '@shared/constants/UI';
import { NLCDLandCoverSaveWebMap } from '@landcover-explorer/components/SaveWebMap';

export const AppLayout = () => {
    const { t } = useTranslation();

    const shouldShowSatelliteImagery = useAppSelector(
        selectShouldShowSatelliteImageryLayer
    );

    useSaveAppState2HashParams();
    useRevalidateToken();

    const getContent = () => {
        if (IS_MOBILE_DEVICE) {
            return (
                <BottomPanel>
                    <div className="mx-auto pb-8 overflow-x-hidden">
                        <div className="pt-4">
                            <NLCDTimeSelector />
                        </div>
                        <div className="mt-8">
                            <NLCDClassificationList />
                        </div>
                        <div className="relative my-8 overflow-x-auto">
                            <NLCDLandCoverSummaryGraph />
                        </div>
                    </div>
                </BottomPanel>
            );
        }

        return (
            <BottomPanel>
                <div className="relative w-full h-full p-2 flex text-custom-light-blue justify-between">
                    <div className="flex">
                        <LandcoverExplorerLayerSelector />
                        <LandcoverExplorerModeSelector />
                    </div>

                    <div className="flex flex-grow justify-center shrink-0">
                        <NLCDTimeSelector />

                        {shouldShowSatelliteImagery === false && (
                            <NLCDClassificationList />
                        )}

                        {shouldShowSatelliteImagery && <LandsatRenderersList />}

                        <NLCDLandCoverSummaryGraph />
                    </div>
                </div>
            </BottomPanel>
        );
    };

    return (
        <ErrorBoundary>
            <AppHeader
                title={t('esri_nlcd_land_cover_explorer_title', {
                    ns: APP_NAME,
                })}
            />
            <AboutNLCDLandcoverExplorer />
            <NLCDLandcoverMapViewContainer />
            <NLCDLandCoverSaveWebMap />
            {getContent()}
        </ErrorBoundary>
    );
};
