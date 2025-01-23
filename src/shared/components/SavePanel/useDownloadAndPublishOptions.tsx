import { PublishAndDownloadJobType } from '@shared/store/PublishAndDownloadJobs/reducer';
import {
    selectActiveAnalysisTool,
    selectAppMode,
    selectListOfQueryParams,
    selectQueryParams4MainScene,
    // selectQueryParams4SceneInSelectedMode,
    selectQueryParams4SecondaryScene,
} from '@shared/store/ImageryScene/selectors';
import React, { useMemo } from 'react';
import { useAppSelector } from '@shared/store/configureStore';

export type PublishAndDownloadJobOptionData = {
    /**
     * The type of job to be saved.
     */
    saveJobType: PublishAndDownloadJobType;
    /**
     * Whether the option is disabled.
     */
    disabled?: boolean;
    /**
     * The message to be displayed when the option is disabled.
     */
    message?: string;
};

/**
 * Custom hook that provides options for downloading and publishing based on the application mode,
 * active analysis tool, and query parameters for the main and secondary scenes.
 *
 * @returns {Object} An object containing `publishOptions` and `downloadOptions`.
 *
 * @property {PublishAndDownloadJobType[]} publishOptions - An array of options for publishing.
 * @property {PublishAndDownloadJobType[]} downloadOptions - An array of options for downloading.
 */
export const useDownloadAndPublishOptions = () => {
    const mode = useAppSelector(selectAppMode);

    const analyzeTool = useAppSelector(selectActiveAnalysisTool);

    const queryParams4MainScene = useAppSelector(selectQueryParams4MainScene);

    const queryParams4SecondaryScene = useAppSelector(
        selectQueryParams4SecondaryScene
    );

    const listOfQueryParams = useAppSelector(selectListOfQueryParams);

    const publishOptions: PublishAndDownloadJobOptionData[] = useMemo(() => {
        const output: PublishAndDownloadJobType[] = [
            PublishAndDownloadJobType.SaveWebMappingApp,
        ];

        if (
            (mode === 'find a scene' ||
                mode === 'dynamic' ||
                mode === 'analysis') &&
            queryParams4MainScene?.objectIdOfSelectedScene
        ) {
            output.push(PublishAndDownloadJobType.SaveWebMap);
            output.push(PublishAndDownloadJobType.PublishScene);
        }

        if (
            mode === 'swipe' &&
            queryParams4MainScene?.objectIdOfSelectedScene &&
            queryParams4SecondaryScene?.objectIdOfSelectedScene
        ) {
            output.push(PublishAndDownloadJobType.SaveWebMapWithMultipleScenes);
            output.push(
                PublishAndDownloadJobType.SaveWebMapWithMultipleScenesInSingleLayer
            );
        }

        if (mode === 'animate' && listOfQueryParams?.length > 0) {
            output.push(PublishAndDownloadJobType.SaveWebMapWithMultipleScenes);
            output.push(
                PublishAndDownloadJobType.SaveWebMapWithMultipleScenesInSingleLayer
            );
        }

        if (
            mode === 'analysis' &&
            analyzeTool === 'mask' &&
            queryParams4MainScene?.objectIdOfSelectedScene
        ) {
            output.push(PublishAndDownloadJobType.PublishIndexMask);
        }

        if (
            mode === 'analysis' &&
            analyzeTool === 'change' &&
            queryParams4MainScene?.objectIdOfSelectedScene &&
            queryParams4SecondaryScene?.objectIdOfSelectedScene
        ) {
            output.push(PublishAndDownloadJobType.PublishChangeDetection);
        }

        return output.map((jobType) => {
            return {
                saveJobType: jobType,
            };
        });
    }, [
        queryParams4MainScene?.objectIdOfSelectedScene,
        queryParams4SecondaryScene?.objectIdOfSelectedScene,
        listOfQueryParams?.length,
        mode,
        analyzeTool,
    ]);

    // const donwloadOptions: PublishAndDownloadJobType[] = useMemo(() => {
    //     const output: PublishAndDownloadJobType[] = [];

    //     return output;
    // }, [queryParams4MainScene?.objectIdOfSelectedScene, mode, analyzeTool]);

    return publishOptions;
};
