import {
    PublishAndDownloadJobStatus,
    PublishAndDownloadJobType,
} from '@shared/store/PublishAndDownloadJobs/reducer';

/**
 * Type definition for information related to save options.
 */
export type SaveOptionInfo = {
    action: 'Publish' | 'Download';
    /**
     * The name of the input type associated with the save option.
     */
    inputName: string;
    /**
     * The name of the output type associated with the save option.
     */
    outputName: string;
    /**
     * A detailed description of the save option.
     */
    description: string;
    /**
     * If true, the output name must be unique.
     */
    requireUniqueOutputName: boolean;
};

const ProfessionalPlusUserTypeLink = `<a class="underline" href="https://www.esri.com/en-us/arcgis/products/user-types/explore/professional-plus" target="_blank">Professional Plus User Type</a>`;
const PublisherRoleLink = `<a class="underline" href="https://doc.arcgis.com/en/arcgis-online/administer/member-roles.htm" target="_blank">Publisher role</a>`;

/**
 * A lookup object that maps save options to their corresponding information.
 * Each save option is associated with an object containing a title, subtitle, and description.
 *
 * @type {Record<SaveOption, { title: string; outputName: string; description: string }>}
 */
export const saveOptionInfoLookup: Record<
    PublishAndDownloadJobType,
    SaveOptionInfo
> = {
    'Publish Scene': {
        action: 'Publish',
        inputName: 'Scene',
        requireUniqueOutputName: true,
        outputName: 'Hosted Imagery',
        description: `Publish a hosted imagery layer of the selected scene. This action requires a ${ProfessionalPlusUserTypeLink} and a ${PublisherRoleLink} or higher.`,
    },
    'Publish Index Mask': {
        action: 'Publish',
        inputName: 'Index mask',
        requireUniqueOutputName: true,
        outputName: 'Hosted Imagery',
        description: `Publish a hosted imagery layer of the current index mask. This action requires a ${ProfessionalPlusUserTypeLink} and a ${PublisherRoleLink} or higher.`,
    },
    'Publish Change Detection': {
        action: 'Publish',
        inputName: 'Change Detection',
        requireUniqueOutputName: true,
        outputName: 'Hosted Imagery',
        description: `Publish a hosted imagery layer of the current change detection output. This action requires a ${ProfessionalPlusUserTypeLink} and a ${PublisherRoleLink} or higher.`,
    },
    'Download Index Mask': {
        action: 'Download',
        inputName: 'Index mask',
        requireUniqueOutputName: false,
        outputName: 'GeoTIFF',
        description:
            'Download the current index mask as a black and white image in GeoTIFF format.',
    },
    'Save Web Mapping App': {
        action: 'Publish',
        inputName: 'Current State',
        requireUniqueOutputName: false,
        outputName: 'Web Application',
        description:
            'Create an instance of this application in its current state as an ArcGIS Online web application.',
    },
    'Save Web Map': {
        action: 'Publish',
        inputName: 'Scene',
        requireUniqueOutputName: false,
        outputName: 'ArcGIS Online Map',
        description:
            'Create an ArcGIS Online map containing the selected scene as a layer.',
    },
};

export const saveJobStatusLabels: Record<PublishAndDownloadJobStatus, string> =
    {
        [PublishAndDownloadJobStatus.Cancelled]: 'Cancelled',
        [PublishAndDownloadJobStatus.Cancelling]: 'Cancelled',
        [PublishAndDownloadJobStatus.Executing]: 'In Progress',
        [PublishAndDownloadJobStatus.Failed]: 'Failed',
        [PublishAndDownloadJobStatus.New]: 'In Progress',
        [PublishAndDownloadJobStatus.Submitted]: 'Pending',
        [PublishAndDownloadJobStatus.Succeeded]: 'Succeeded',
        [PublishAndDownloadJobStatus.TimedOut]: 'Timed Out',
        [PublishAndDownloadJobStatus.Waiting]: 'Timed Out',
        [PublishAndDownloadJobStatus.Expired]: 'Expired',
    };

export const jobTypeLabels: Record<PublishAndDownloadJobType, string> = {
    [PublishAndDownloadJobType.PublishScene]: 'Scene as Hosted Imagery',
    [PublishAndDownloadJobType.PublishIndexMask]:
        'Index Mask as Hosted Imagery',
    [PublishAndDownloadJobType.PublishChangeDetection]:
        'Change Detection as Hosted Imagery',
    [PublishAndDownloadJobType.DownloadIndexMask]: 'Index Mask as GeoTIFF',
    [PublishAndDownloadJobType.SaveWebMappingApp]:
        'Current State as Web Application',
    [PublishAndDownloadJobType.SaveWebMap]: 'Scene as ArcGIS Online Web Map',
};
