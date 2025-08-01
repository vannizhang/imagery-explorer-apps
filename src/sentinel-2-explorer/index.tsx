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

// import '@arcgis/core/assets/esri/themes/dark/main.css';
import '@shared/styles/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import ErrorBoundary from '@shared/components/ErrorBoundary/ErrorBoundary';
import { ErrorPage } from '@shared/components/ErrorPage';
// import AppContextProvider from '@shared/contexts/AppContextProvider';
import { getSentinel2ExplorerStore } from './store';
// import { getTimeExtentOfSentinel2Service } from '@shared/services/sentinel-2/getTimeExtent';
// import { SENTINEL2_RASTER_FUNCTION_INFOS } from '@shared/services/sentinel-2/config';
import Map from './components/Map/Map';
import Layout from './components/Layout/Layout';
import { initEsriOAuth } from '@shared/utils/esri-oauth';
import { AGOL_PORTAL_ROOT, SENTINEL2_EXPLORER_APP_ID } from '@shared/config';
import { AboutSentinel2Explorer } from './components/About';
import { initI18next } from '@shared/i18n/initI18next';
import { APP_LANGUAGE } from '@shared/constants/UI';
import '@shared/components/calcite-components';
import { initializeApp } from '@shared/utils/initialize-app/initializeApp';
// import { getTranslatedSentinel2RasterFunctionInfo } from './utils/getTranslatedSentinel2RasterFunctionInfo';

(async () => {
    const root = createRoot(document.getElementById('root'));

    try {
        // await initI18next(APP_LANGUAGE);

        // await initEsriOAuth({
        //     appId: SENTINEL2_EXPLORER_APP_ID,
        //     portalUrl: AGOL_PORTAL_ROOT,
        // });
        // // console.log('initEsriOAuth done');

        await initializeApp({
            appId: SENTINEL2_EXPLORER_APP_ID,
        });

        const store = await getSentinel2ExplorerStore();

        // const timeExtent = await getTimeExtentOfSentinel2Service();
        // console.log(timeExtent);

        root.render(
            <ReduxProvider store={store}>
                <ErrorBoundary>
                    <Map />
                    <Layout />
                    <AboutSentinel2Explorer />
                </ErrorBoundary>
            </ReduxProvider>
        );
    } catch (err) {
        console.log(err);
        root.render(<ErrorPage error={err} />);
    }
})();
