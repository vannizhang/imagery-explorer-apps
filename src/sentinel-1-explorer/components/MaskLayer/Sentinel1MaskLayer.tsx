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

import GroupLayer from '@arcgis/core/layers/GroupLayer';
import MapView from '@arcgis/core/views/MapView';
import { ImageryLayerWithPixelFilter } from '@shared/components/ImageryLayerWithPixelFilter';
import React, {
    FC,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import {
    selectSelectedIndex4MaskTool,
    selectMaskLayerPixelValueRange,
    selectShouldClipMaskLayer,
    selectMaskLayerOpcity,
    selectMaskLayerPixelColor,
    // selectActiveAnalysisTool,
} from '@shared/store/MaskTool/selectors';
import { useAppSelector } from '@shared/store/configureStore';
import {
    selectActiveAnalysisTool,
    selectAppMode,
    selectQueryParams4MainScene,
    selectQueryParams4SceneInSelectedMode,
} from '@shared/store/ImageryScene/selectors';
import { RadarIndex } from '@typing/imagery-service';
import {
    SENTINEL_1_SERVICE_URL,
    Sentinel1FunctionName,
} from '@shared/services/sentinel-1/config';
import RasterFunction from '@arcgis/core/layers/support/RasterFunction';
import { Sentinel1PixelValueRangeByIndex } from '../MaskTool/Sentinel1MaskTool';
import { WaterLandMaskLayer } from './WaterLandMaskLayer';
import { useAppDispatch } from '@shared/store/configureStore';
import { countOfVisiblePixelsChanged } from '@shared/store/Map/reducer';
import { useCalculateTotalAreaByPixelsCount } from '@shared/hooks/useCalculateTotalAreaByPixelsCount';
import { getSentinel1RasterFunctionNameByIndex } from '@shared/services/sentinel-1/helper';
import { useSentinel1MaskToolFullPixelValueRange } from '../MaskTool/useSentinel1MaskToolFullPixelValueRange';

type Props = {
    mapView?: MapView;
    groupLayer?: GroupLayer;
};

export const Sentinel1MaskLayer: FC<Props> = ({ mapView, groupLayer }) => {
    const dispatch = useAppDispatch();

    const mode = useAppSelector(selectAppMode);

    const groupLayer4MaskAndWaterLandLayersRef = useRef<GroupLayer>();

    const selectedIndex = useAppSelector(
        selectSelectedIndex4MaskTool
    ) as RadarIndex;

    const { selectedRange } = useAppSelector(selectMaskLayerPixelValueRange);

    const pixelColor = useAppSelector(selectMaskLayerPixelColor);

    const opacity = useAppSelector(selectMaskLayerOpcity);

    const shouldClip = useAppSelector(selectShouldClipMaskLayer);

    const { objectIdOfSelectedScene } =
        useAppSelector(selectQueryParams4SceneInSelectedMode) || {};

    const anailysisTool = useAppSelector(selectActiveAnalysisTool);

    const isVisible = useMemo(() => {
        if (mode !== 'analysis' || anailysisTool !== 'mask') {
            return false;
        }

        if (!objectIdOfSelectedScene) {
            return false;
        }

        return true;
    }, [mode, anailysisTool, objectIdOfSelectedScene]);

    // const fullPixelValueRange = useMemo(() => {
    //     return (
    //         Sentinel1PixelValueRangeByIndex[selectedIndex as RadarIndex] || [
    //             0, 0,
    //         ]
    //     );
    // }, [selectedIndex]);

    const fullPixelValueRange = useSentinel1MaskToolFullPixelValueRange();

    const selectedPixelValueRange4Band2 = useMemo(() => {
        if (selectedIndex === 'ship' || selectedIndex === 'urban') {
            return selectedRange;
        }

        return null;
    }, [selectedIndex, selectedRange]);

    const rasterFunction = useMemo(() => {
        return new RasterFunction({
            functionName: getSentinel1RasterFunctionNameByIndex(selectedIndex),
        });
    }, [selectedIndex]);

    const initGroupLayer4MaskAndWaterLandLayers = () => {
        groupLayer4MaskAndWaterLandLayersRef.current = new GroupLayer({
            blendMode: shouldClip && isVisible ? 'destination-atop' : 'normal',
            visible: isVisible,
        });

        groupLayer.add(groupLayer4MaskAndWaterLandLayersRef.current);
    };

    useCalculateTotalAreaByPixelsCount({
        objectId: objectIdOfSelectedScene,
        serviceURL: SENTINEL_1_SERVICE_URL,
        pixelSize: mapView.resolution,
    });

    useEffect(() => {
        initGroupLayer4MaskAndWaterLandLayers();
    }, []);

    useEffect(() => {
        if (!groupLayer4MaskAndWaterLandLayersRef.current) {
            return;
        }

        // Set blend mode to 'destination-atop' only when shouldClip is true and the mask layer is on.
        // If the mask layer is off and the blend mode remains 'destination-atop', the underlying Sentinel-1 Layer becomes invisible.
        groupLayer4MaskAndWaterLandLayersRef.current.blendMode =
            shouldClip && isVisible ? 'destination-atop' : 'normal';
    }, [shouldClip, isVisible]);

    useEffect(() => {
        if (!groupLayer4MaskAndWaterLandLayersRef.current) {
            return;
        }

        groupLayer4MaskAndWaterLandLayersRef.current.visible = isVisible;
    }, [isVisible]);

    if (!groupLayer4MaskAndWaterLandLayersRef.current) {
        return null;
    }

    return (
        <>
            <ImageryLayerWithPixelFilter
                mapView={mapView}
                groupLayer={groupLayer4MaskAndWaterLandLayersRef.current}
                objectId={objectIdOfSelectedScene}
                visible={isVisible}
                serviceURL={SENTINEL_1_SERVICE_URL}
                rasterFunction={rasterFunction}
                selectedPixelValueRange={selectedRange}
                selectedPixelValueRange4Band2={selectedPixelValueRange4Band2}
                fullPixelValueRange={fullPixelValueRange}
                opacity={opacity}
                pixelColor={pixelColor}
                countOfPixelsOnChange={(totalPixels, visiblePixels) => {
                    dispatch(countOfVisiblePixelsChanged(visiblePixels));
                }}
            />

            <WaterLandMaskLayer
                visible={selectedIndex === 'ship' || selectedIndex === 'urban'}
                visibleCategory={selectedIndex === 'ship' ? 'water' : 'land'}
                groupLayer={groupLayer4MaskAndWaterLandLayersRef.current}
            />
        </>
    );
};
