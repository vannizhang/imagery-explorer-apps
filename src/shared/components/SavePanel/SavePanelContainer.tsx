import React, { FC } from 'react';
import { SavePanel } from './SavePanel';
import { PublishAndDownloadJobOptionData } from './useDownloadAndPublishOptions';
import { SaveJobButtonOnClickParams } from '@shared/components/SavePanel';
import { publishSceneAsHostedImageryLayer } from '@shared/services/raster-analysis/publishSceneAsHostedImageryLayer';
import {
    createChangeDetectionRasterFunction,
    createClipRasterFunction,
    createMaskIndexRasterFunction,
} from '@shared/services/raster-analysis/rasterFunctions';
import {
    selectQueryParams4MainScene,
    // selectQueryParams4SceneInSelectedMode,
    // selectQueryParams4SecondaryScene,
} from '@shared/store/ImageryScene/selectors';
import { getToken } from '@shared/utils/esri-oauth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useSaveOptions } from './useSaveOptions';
import {
    createNewPublishAndDownloadJob,
    updatePublishAndDownloadJob,
} from '@shared/store/PublishAndDownloadJobs/thunks';

import {
    selectMaskLayerPixelValueRange,
    selectSelectedIndex4MaskTool,
} from '@shared/store/MaskTool/selectors';
import { SpectralIndex } from '@typing/imagery-service';
import { getBandIndexesBySpectralIndex } from '@shared/services/landsat-level-2/helpers';
import { getLandsatFeatureByObjectId } from '@shared/services/landsat-level-2/getLandsatScenes';
import { Extent, Geometry } from '@arcgis/core/geometry';
import {
    jobUpdated,
    PublishAndDownloadJob,
    PublishAndDownloadJobStatus,
    PublishAndDownloadJobType,
} from '@shared/store/PublishAndDownloadJobs/reducer';
import { createWebMappingApplication } from '@shared/services/arcgis-online/createWebMappingApplication';
import { saveImagerySceneAsWebMap } from '@shared/services/arcgis-online/createWebMap';

type PublishJob =
    | PublishAndDownloadJobType.PublishChangeDetection
    | PublishAndDownloadJobType.PublishIndexMask
    | PublishAndDownloadJobType.PublishScene;

/**
 * Raster functions for the publish jobs.
 */
export type RasterFunctionsByPublishJobType = Record<PublishJob, any>;

export type SavePanelContainerProps = {
    /**
     * The URL of the original imagery service.
     */
    originalServiceUrl: string;
    /**
     * name of the service
     * @example 'LandsatLevel2'
     */
    serviceName: string;
    /**
     * The ID of the scene to be saved.
     */
    sceneId: string;
    /**
     * Options for publishing the scene.
     */
    publishOptions: PublishAndDownloadJobOptionData[];
    /**
     * Tags to be added to the item in ArcGIS Online.
     */
    tags: string[];
    /**
     * Raster function for publishing the scene.
     */
    publishSceneRasterFunction?: any;
    /**
     * Raster function for publishing the index mask.
     */
    publishIndexMaskRasterFunction?: any;
    /**
     * Raster function for publishing the change detection.
     */
    publishChangeDetectionRasterFunction?: any;
};

export const SavePanelContainer: FC<SavePanelContainerProps> = ({
    originalServiceUrl,
    serviceName,
    sceneId,
    publishOptions,
    tags,
    publishSceneRasterFunction,
    publishIndexMaskRasterFunction,
    publishChangeDetectionRasterFunction,
}) => {
    const dispatch = useDispatch();

    const queryParams4MainScene = useSelector(selectQueryParams4MainScene);

    const publishSelectedScene = async ({
        job,
        title,
        snippet,
    }: {
        job: PublishAndDownloadJob;
        title: string;
        snippet: string;
    }) => {
        try {
            const rasterFunctions: RasterFunctionsByPublishJobType = {
                [PublishAndDownloadJobType.PublishScene]:
                    publishSceneRasterFunction,
                [PublishAndDownloadJobType.PublishIndexMask]:
                    publishIndexMaskRasterFunction,
                [PublishAndDownloadJobType.PublishChangeDetection]:
                    publishChangeDetectionRasterFunction,
            };

            const rasterFunction = rasterFunctions[job.type as PublishJob];

            if (!rasterFunction) {
                throw new Error('Failed to create raster function');
            }

            const response = await publishSceneAsHostedImageryLayer({
                title, //'hosted-imagery-service-' + new Date().getTime(),
                snippet,
                rasterFunction,
            });
            // console.log('Generate Raster Job submitted', response);

            dispatch(
                updatePublishAndDownloadJob({
                    ...job,
                    rasterAnanlysisJobId: response.rasterAnalysisJobId,
                    rasterAnalysisTaskName: 'GenerateRaster',
                    outputURL: response.outputServiceUrl,
                    outputItemId: response.outputItemId,
                })
            );
        } catch (err) {
            dispatch(
                updatePublishAndDownloadJob({
                    ...job,
                    status: PublishAndDownloadJobStatus.Failed,
                    errormessage: `Failed to publish scene: ${
                        err.message || 'unknown error'
                    }`,
                })
            );
        }
    };

    const createNewItemInArcGISOnline = async ({
        job,
        title,
        snippet,
    }: {
        job: PublishAndDownloadJob;
        title: string;
        snippet: string;
    }) => {
        try {
            const res =
                job.type === PublishAndDownloadJobType.SaveWebMappingApp
                    ? await createWebMappingApplication({
                          title,
                          snippet,
                          tags, //'Esri Landsat Explorer, Landsat, Landsat-Level-2 Imagery, Remote Sensing',
                      })
                    : await saveImagerySceneAsWebMap({
                          title, // `Landsat Scene (${landsatScene.name})`,
                          snippet, // `Landsat Scene (${landsatScene.name})`,
                          tags,
                          serviceUrl: originalServiceUrl,
                          serviceName, //'LandsatLevel2',
                          objectIdOfSelectedScene:
                              queryParams4MainScene?.objectIdOfSelectedScene,
                      });

            dispatch(
                updatePublishAndDownloadJob({
                    ...job,
                    status: PublishAndDownloadJobStatus.Succeeded,
                    outputItemId: res.id,
                })
            );
        } catch (err) {
            dispatch(
                updatePublishAndDownloadJob({
                    ...job,
                    status: PublishAndDownloadJobStatus.Failed,
                    errormessage: `Failed to create ArcGIS Online item: ${
                        err.message || 'unknown error'
                    }`,
                })
            );
        }
    };

    const saveButtonOnClickHandler = async ({
        saveJobType,
        title,
        summary,
    }: SaveJobButtonOnClickParams) => {
        // console.log('saveOptionOnClick', option);

        const job = await dispatch(
            createNewPublishAndDownloadJob({
                jobType: saveJobType,
                title,
                summary,
                sceneId,
            })
        );

        if (
            saveJobType === PublishAndDownloadJobType.PublishScene ||
            saveJobType === PublishAndDownloadJobType.PublishIndexMask ||
            saveJobType === PublishAndDownloadJobType.PublishChangeDetection
        ) {
            publishSelectedScene({
                job,
                title,
                snippet: summary,
            });
            return;
        }

        if (
            saveJobType === PublishAndDownloadJobType.SaveWebMappingApp ||
            saveJobType === PublishAndDownloadJobType.SaveWebMap
        ) {
            createNewItemInArcGISOnline({
                job,
                title,
                snippet: summary,
            });
            return;
        }
    };

    return (
        <SavePanel
            sceneId={sceneId}
            publishOptions={publishOptions}
            saveButtonOnClick={saveButtonOnClickHandler}
        />
    );
};
