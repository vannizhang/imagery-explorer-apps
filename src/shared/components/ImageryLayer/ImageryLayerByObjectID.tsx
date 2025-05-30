/* Copyright 2025 Esri
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

import MapView from '@arcgis/core/views/MapView';
import React, { FC, useEffect } from 'react';
import { useImageryLayerByObjectId } from './useImageLayer';
import { useAppSelector } from '@shared/store/configureStore';
import {
    selectQueryParams4SceneInSelectedMode,
    selectAppMode,
    selectActiveAnalysisTool,
} from '@shared/store/ImageryScene/selectors';
import { selectAnimationStatus } from '@shared/store/UI/selectors';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import { selectChangeCompareLayerIsOn } from '@shared/store/ChangeCompareTool/selectors';
import { selectIsTemporalCompositeLayerOn } from '@shared/store/TemporalCompositeTool/selectors';
import MosaicRule from '@arcgis/core/layers/support/MosaicRule';

type Props = {
    serviceUrl: string;
    mapView?: MapView;
    groupLayer?: GroupLayer;
    /**
     * the mosaic rule that will be used for the imagery layer in Dynamic mode
     */
    defaultMosaicRule: MosaicRule;
};

const ImageryLayerByObjectID: FC<Props> = ({
    serviceUrl,
    mapView,
    groupLayer,
    defaultMosaicRule,
}: Props) => {
    const mode = useAppSelector(selectAppMode);

    const { rasterFunctionName, objectIdOfSelectedScene } =
        useAppSelector(selectQueryParams4SceneInSelectedMode) || {};

    const animationStatus = useAppSelector(selectAnimationStatus);

    const analysisTool = useAppSelector(selectActiveAnalysisTool);

    const changeCompareLayerIsOn = useAppSelector(selectChangeCompareLayerIsOn);

    const isTemporalCompositeLayerOn = useAppSelector(
        selectIsTemporalCompositeLayerOn
    );

    const getVisibility = () => {
        if (mode === 'dynamic') {
            return true;
        }

        if (mode === 'find a scene' || mode === 'spectral sampling') {
            return objectIdOfSelectedScene !== null;
        }

        if (mode === 'analysis') {
            // no need to show imagery layer when user is viewing change layer in the change compare tool
            if (analysisTool === 'change' && changeCompareLayerIsOn) {
                return false;
            }

            // no need to show imagery layer when user is using the 'temporal composite' tool
            if (analysisTool === 'temporal composite') {
                return false;
            }

            return objectIdOfSelectedScene !== null;
        }

        // when in animate mode, only need to show landsat layer if animation is not playing
        if (
            mode === 'animate' &&
            objectIdOfSelectedScene &&
            animationStatus === null
        ) {
            return true;
        }

        return false;
    };

    const getObjectId = () => {
        // should ignore the object id of selected scene if in dynamic mode,
        if (mode === 'dynamic') {
            return null;
        }

        return objectIdOfSelectedScene;
    };

    const layer = useImageryLayerByObjectId({
        url: serviceUrl,
        visible: getVisibility(),
        rasterFunction: rasterFunctionName,
        objectId: getObjectId(),
        defaultMosaicRule,
    });

    useEffect(() => {
        if (groupLayer && layer) {
            groupLayer.add(layer);
            groupLayer.reorder(layer, 0);
        }
    }, [groupLayer, layer]);

    return null;
};

export default ImageryLayerByObjectID;
