import React, { lazy, Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LoadingIndicator from './LoadingIndicator';
import { About } from '../About';

const LandsatLayout = lazy(
    () =>
        import(
            /* webpackChunkName: "landsat" */
            '../../../landsat-explorer/components/Layout/Layout'
        )
);

const LandsatMap = lazy(
    () =>
        import(
            /* webpackChunkName: "landsat-map" */
            '../../../landsat-explorer/components/Map/Map'
        )
);

const Sentinel2Layout = lazy(
    () =>
        import(
            /* webpackChunkName: "sentinel2" */
            '../../../sentinel2-explorer/components/Layout/Layout'
        )
);

const Sentinel2Map = lazy(
    () =>
        import(
            /* webpackChunkName: "sentinel2-map" */
            '../../../sentinel2-explorer/components/Map/Map'
        )
);

const SpectralSamplingToolLayout = lazy(
    () =>
        import(
            /* webpackChunkName: "spectral-sampling-tool" */
            '../../../spectral-sampling-tool/components/Layout/Layout'
        )
);

const SpectralSamplingTool2Map = lazy(
    () =>
        import(
            /* webpackChunkName: "spectral-sampling-tool-map" */
            '../../../spectral-sampling-tool/components/Map/Map'
        )
);

const AppLayout = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<LoadingIndicator />}>
                {APP_NAME === 'landsat' && <LandsatMap />}
                {APP_NAME === 'landsat' && <LandsatLayout />}
                {APP_NAME === 'sentinel-2' && <Sentinel2Map />}
                {APP_NAME === 'sentinel-2' && <Sentinel2Layout />}
                {APP_NAME === 'spectral-sampling-tool' && (
                    <SpectralSamplingTool2Map />
                )}
                {APP_NAME === 'spectral-sampling-tool' && (
                    <SpectralSamplingToolLayout />
                )}
                <About />
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppLayout;
