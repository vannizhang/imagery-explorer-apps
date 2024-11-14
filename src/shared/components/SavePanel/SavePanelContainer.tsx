import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowSavePanel } from '@shared/store/UI/selectors';
import { CloseButton } from '../CloseButton';
import { showSavePanelToggled } from '@shared/store/UI/reducer';
import { isAnonymouns, signIn } from '@shared/utils/esri-oauth';
import { CreateWebMap } from './CreateWebMap/CreateWebMap';
import { CreateWebMappingApplication } from './CreateWebMappingApplication/CreateWebMappingApplication';
import { CreateHostedImageryLayer } from './CreateHostedImageryLayer/CreateHostedImageryLayer';
import { DownloadImageryScene } from './DownloadImageryScene/DownloadImageryScene';
import { JobList } from './JobList';
import { useCheckJobStatus } from './useCheckJobStatus';
// import { SaveOptionSelector } from './SaveOptionSelector/SaveOptionSelector';

// Define the possible options for the save panel
export type SavePanelOption =
    | 'create web map'
    | 'create web mapping application'
    | 'create hosted imagery layer'
    | 'download imagery scene';

type SavePanelContainerProps = {
    /**
     * URL of the imagery service to be used for the generate and download raster job.
     *
     * Please note that this URL should be the actual URL of the imagery service, not the URL of the service proxy used by the app.
     */
    imageryServiceURL: string;
    /**
     * ID of the scene to be used for the generate and download raster job.
     */
    sceneId: string;
};

export const SavePanelContainer: FC<SavePanelContainerProps> = ({
    imageryServiceURL,
    sceneId,
}) => {
    const dispatch = useDispatch();

    const shouldShowSavePanel = useSelector(selectShowSavePanel);

    useCheckJobStatus();

    useEffect(() => {
        if (!shouldShowSavePanel) {
            return;
        }

        if (isAnonymouns()) {
            signIn();
        }
    }, [shouldShowSavePanel]);

    if (!shouldShowSavePanel) {
        return null;
    }

    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-custom-background-95 z-20 text-custom-light-blue overflow-y-auto fancy-scrollbar">
            <CloseButton
                onClick={() => {
                    dispatch(showSavePanelToggled());
                }}
            />

            <div className="mt-4 mx-auto py-12  max-w-6xl w-full">
                <div>{sceneId}</div>

                {/* <SaveOptionSelector
                    selectedOption={selectedOption}
                    selecedOptionChanged={setSelectedOption}
                /> */}

                <div className="w-full mt-12">
                    <CreateHostedImageryLayer
                        imageryServiceURL={imageryServiceURL}
                        sceneId={sceneId}
                    />
                    <DownloadImageryScene />
                    <CreateWebMap />
                    <CreateWebMappingApplication />
                </div>

                <JobList />
            </div>
        </div>
    );
};
