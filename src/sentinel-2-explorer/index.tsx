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

// import '@arcgis/core/assets/esri/themes/dark/main.css';
import '@shared/styles/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import ErrorBoundary from '@shared/components/ErrorBoundary/ErrorBoundary';
import { ErrorPage } from '@shared/components/ErrorPage';
import AppContextProvider from '@shared/contexts/AppContextProvider';

(async () => {
    const root = createRoot(document.getElementById('root'));

    try {
        // const store = await getSentinel1ExplorerStore();

        // const timeExtent = await getTimeExtentOfSentinel1Service();
        // // console.log(timeExtent);

        // root.render(
        //     <ReduxProvider store={store}>
        //         <AppContextProvider
        //             timeExtent={timeExtent}
        //             rasterFunctionInfo={SENTINEL1_RASTER_FUNCTION_INFOS}
        //         >
        //             <ErrorBoundary>
        //                 <Map />
        //                 <Layout />
        //                 <AboutSentinel1Explorer />
        //                 <Sentinel1DocPanel />
        //             </ErrorBoundary>
        //         </AppContextProvider>
        //     </ReduxProvider>
        // );

        root.render(<h1>Sentinel2 Explorer</h1>);
    } catch (err) {
        console.log(err);
        root.render(<ErrorPage error={err} />);
    }
})();
