import { checkRasterAnalysisJobStatus } from '@shared/services/raster-analysis/checkJobStatus';
import {
    PublishAndDownloadJob,
    PublishAndDownloadJobStatus,
} from '@shared/store/PublishAndDownloadJobs/reducer';
import { selectPendingRasterAnalysisJobs } from '@shared/store/PublishAndDownloadJobs/selectors';
import { updatePublishAndDownloadJob } from '@shared/store/PublishAndDownloadJobs/thunks';
import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '@shared/store/configureStore';
import { useSelector } from 'react-redux';

export const useCheckJobStatus = () => {
    const dispatch = useAppDispatch();

    const pendingJobs = useSelector(selectPendingRasterAnalysisJobs);

    const intervalIdRef = useRef<NodeJS.Timeout>();

    const checkJobStatus = async (job: PublishAndDownloadJob) => {
        const jobWithUpdatedStatus = {
            ...job,
        };

        try {
            const response = await checkRasterAnalysisJobStatus(
                job.rasterAnanlysisJobId,
                job.rasterAnalysisTaskName
            );
            // Handle the response as needed
            // console.log(`Status for job ${job.jobId}:`, response);

            if (!response.jobStatus) {
                throw new Error('Job status not found');
            }

            // const jobWithUpdatedStatus = {
            //     ...job,
            //     status: response.jobStatus,
            //     output: response,
            // };

            jobWithUpdatedStatus.status = response.jobStatus;
            // jobWithUpdatedStatus.output = response;

            jobWithUpdatedStatus.progress = response?.progress?.percent || 0;

            // dispatch(updatePublishAndDownloadJob(jobWithUpdatedStatus));
        } catch (error) {
            console.error(
                `Error checking status for job ${job.rasterAnanlysisJobId}:`,
                error
            );

            jobWithUpdatedStatus.status = PublishAndDownloadJobStatus.Failed;
            jobWithUpdatedStatus.errormessage = error.message;
        }

        dispatch(updatePublishAndDownloadJob(jobWithUpdatedStatus));
    };

    useEffect(() => {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
        }

        if (!pendingJobs.length) {
            console.log('No pending jobs to check');
            return;
        }

        intervalIdRef.current = setInterval(() => {
            // console.log(
            //     'Checking job status for:',
            //     pendingJobs.map((job) => job.rasterAnanlysisJobId).join(',')
            // );

            pendingJobs.forEach((job) => {
                checkJobStatus(job);
            });
        }, 15 * 1000); // 15 seconds

        return () => clearInterval(intervalIdRef.current); // Cleanup interval on unmount
    }, [pendingJobs]);
};
