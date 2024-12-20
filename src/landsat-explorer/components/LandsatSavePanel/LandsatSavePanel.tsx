import React, { useEffect, useMemo, useState } from 'react';
import { useSelectedLandsatScene } from '@landsat-explorer/hooks/useSelectedLandsatScene';
import { SavePanel } from '@shared/components/SavePanel';
import { LANDSAT_LEVEL_2_ORIGINAL_SERVICE_URL } from '@shared/services/landsat-level-2/config';
import { useDownloadAndPublishOptions } from '@shared/components/SavePanel/useDownloadAndPublishOptions';
import { Geometry } from '@arcgis/core/geometry';
import { selectQueryParams4MainScene } from '@shared/store/ImageryScene/selectors';
import { useSelector } from 'react-redux';
import { getLandsatFeatureByObjectId } from '@shared/services/landsat-level-2/getLandsatScenes';
import { getToken } from '@shared/utils/esri-oauth';
import { usePublishSceneRasterFunction } from '@shared/components/SavePanel/usePublishSceneRasterFunction';
import { usePublishMaskIndexRasterFunction } from '@shared/components/SavePanel/usePublishMaskIndexRasterFunction';
import { usePublishChangeDetectionRasterFunction } from '@shared/components/SavePanel/usePublishChangeDetectionRasterFunction';
import { useLandsatMaskToolFullPixelValueRange } from '../MaskTool/useLandsatMaskToolFullPixelValueRange';
import {
    selectMaskLayerPixelValueRange,
    selectSelectedIndex4MaskTool,
} from '@shared/store/MaskTool/selectors';
import { SpectralIndex } from '@typing/imagery-service';
import { getBandIndexesBySpectralIndex } from '@shared/services/landsat-level-2/helpers';
import { selectSelectedOption4ChangeCompareTool } from '@shared/store/ChangeCompareTool/selectors';

const TAGS = [
    'Esri Landsat Explorer',
    'Landsat',
    'Landsat-Level-2 Imagery',
    'Remote Sensing',
];

export const LandsatSavePanel = () => {
    const landsatScene = useSelectedLandsatScene();

    const { publishOptions } = useDownloadAndPublishOptions();

    const queryParams4MainScene = useSelector(selectQueryParams4MainScene);

    const [clippingGeometry, setClippingGeometry] = useState<Geometry | null>(
        null
    );

    const maskToolFullPixelValueRange = useLandsatMaskToolFullPixelValueRange();

    const spectralIndex4MaskTool = useSelector(
        selectSelectedIndex4MaskTool
    ) as SpectralIndex;

    const maskToolBandIndexes = useMemo(() => {
        if (!spectralIndex4MaskTool) {
            return null;
        }

        return getBandIndexesBySpectralIndex(spectralIndex4MaskTool);
    }, [spectralIndex4MaskTool]);

    const spectralIndex4ChangeDetection = useSelector(
        selectSelectedOption4ChangeCompareTool
    ) as SpectralIndex;

    const changeDetectionToolBandIndexes = useMemo(() => {
        return getBandIndexesBySpectralIndex(spectralIndex4ChangeDetection);
    }, [spectralIndex4ChangeDetection]);

    const token = getToken();

    useEffect(() => {
        (async () => {
            if (
                !queryParams4MainScene ||
                !queryParams4MainScene?.objectIdOfSelectedScene
            ) {
                setClippingGeometry(null);
                return;
            }

            const feature = await getLandsatFeatureByObjectId(
                queryParams4MainScene.objectIdOfSelectedScene
            );

            const clippingGeometry = feature?.geometry as Geometry;

            setClippingGeometry(clippingGeometry);
        })();
    }, [queryParams4MainScene]);

    const publishSceneRasterFunction = usePublishSceneRasterFunction({
        originalServiceUrl: LANDSAT_LEVEL_2_ORIGINAL_SERVICE_URL,
        clippingGeometry,
        token,
    });

    const publishIndexMaskRasterFunction = usePublishMaskIndexRasterFunction({
        originalServiceUrl: LANDSAT_LEVEL_2_ORIGINAL_SERVICE_URL,
        clippingGeometry,
        fullPixelValueRange: maskToolFullPixelValueRange,
        bandIndexes: maskToolBandIndexes,
        token,
    });

    const publishChangeDetectionRasterFunction =
        usePublishChangeDetectionRasterFunction({
            originalServiceUrl: LANDSAT_LEVEL_2_ORIGINAL_SERVICE_URL,
            clippingGeometry,
            bandIndexes: changeDetectionToolBandIndexes,
            token,
        });

    return (
        <SavePanel
            sceneId={landsatScene?.name}
            publishOptions={publishOptions}
            originalServiceUrl={LANDSAT_LEVEL_2_ORIGINAL_SERVICE_URL}
            serviceName={'LandsatLevel2'}
            tags={TAGS}
            publishSceneRasterFunction={publishSceneRasterFunction}
            publishIndexMaskRasterFunction={publishIndexMaskRasterFunction}
            publishChangeDetectionRasterFunction={
                publishChangeDetectionRasterFunction
            }
        />
    );
};
