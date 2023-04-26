import '../../styles/index.css';
import React, { lazy, Suspense, FC, useEffect, useState } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MapView from '../MapView/MapViewContainer';

const LandsatLayout = lazy(
    () =>
        import(
            /* webpackChunkName: "landsat" */
            '../../../landsat-explorer/'
        )
);
const Sentinel2Layout = lazy(
    () =>
        import(
            /* webpackChunkName: "sentinel2" */
            '../../../sentinel2-explorer/'
        )
);

const AppLayout = () => {
    return (
        <ErrorBoundary>
            <MapView></MapView>
            <Suspense
                fallback={
                    // <calcite-loader active></calcite-loader>
                    null
                }
            >
                {IMAGERY_SERVICE === 'landsat' && <LandsatLayout />}
                {IMAGERY_SERVICE === 'sentinel-2' && <Sentinel2Layout />}
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppLayout;
