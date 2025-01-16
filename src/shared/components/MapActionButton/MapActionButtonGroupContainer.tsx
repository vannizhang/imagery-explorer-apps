import MapView from '@arcgis/core/views/MapView';
import React, { FC } from 'react';
import { MapActionButtonGroup } from './MapActionButtonGroup';
import { OpenSavePanelButton } from '../OpenSavePanelButton';
import { CopyLinkWidget } from '../CopyLinkWidget';
import { ScreenshotWidget } from '../ScreenshotWidget/ScreenshotWidget';
import { ZoomToExtent } from '../ZoomToExtent';
import { ZoomWidget } from '../MapView/ZoomWidget';
import { Zoom2NativeScale } from '../Zoom2NativeScale/Zoom2NativeScale';

type Props = {
    mapView?: MapView;
    /**
     * The URL of image service that will be used to zoom to its extent
     */
    serviceUrl: string;
    /**
     * The native scale of the image service
     */
    nativeScale: number;
    /**
     * The name of the image service
     */
    serviceName: string;
};

export const MapActionButtonGroupContainer: FC<Props> = ({
    mapView,
    serviceUrl,
    serviceName,
    nativeScale,
}) => {
    if (!mapView) return null;

    return (
        <MapActionButtonGroup mapView={mapView}>
            <ZoomWidget />
            <Zoom2NativeScale
                nativeScale={nativeScale}
                tooltip={`Zoom to ${serviceName}'s native resolution`}
            />
            <ZoomToExtent serviceUrl={serviceUrl} />

            <div className="h-[1px] my-[5px] w-map-action-button-size bg-custom-background"></div>

            <ScreenshotWidget />
            <CopyLinkWidget />
            <OpenSavePanelButton />
        </MapActionButtonGroup>
    );
};
