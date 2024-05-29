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
/* Copyright 2024 Esri
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
import {
    selectSelectedIndex4MaskTool,
    selectMaskOptions,
    selectShouldClipMaskLayer,
    selectMaskLayerOpcity,
    // selectActiveAnalysisTool,
} from '@shared/store/MaskTool/selectors';
import { useSelector } from 'react-redux';
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

type Props = {
    mapView?: MapView;
    groupLayer?: GroupLayer;
};

/**
 * Lookup table that maps RadarIndex values to corresponding Sentinel1FunctionName values.
 *
 * This table is used by the Mask Layer to select the appropriate raster function based on the specified index.
 */
const RasterFunctionNameByIndx: Record<RadarIndex, Sentinel1FunctionName> = {
    ship: 'VV and VH Power with Despeckle',
    urban: 'VV and VH Power with Despeckle',
    water: 'SWI Raw',
    'water anomaly': 'Water Anomaly Index Raw',
};

export const Sentinel1MaskLayer: FC<Props> = ({ mapView, groupLayer }) => {
    const mode = useSelector(selectAppMode);

    const groupLayer4MaskAndWaterLandLayersRef = useRef<GroupLayer>();

    const selectedIndex = useSelector(
        selectSelectedIndex4MaskTool
    ) as RadarIndex;

    const { selectedRange, color } = useSelector(selectMaskOptions);

    const opacity = useSelector(selectMaskLayerOpcity);

    const shouldClip = useSelector(selectShouldClipMaskLayer);

    const { objectIdOfSelectedScene } =
        useSelector(selectQueryParams4SceneInSelectedMode) || {};

    const anailysisTool = useSelector(selectActiveAnalysisTool);

    const isVisible = useMemo(() => {
        if (mode !== 'analysis' || anailysisTool !== 'mask') {
            return false;
        }

        if (!objectIdOfSelectedScene) {
            return false;
        }

        return true;
    }, [mode, anailysisTool, objectIdOfSelectedScene]);

    const fullPixelValueRange = useMemo(() => {
        return (
            Sentinel1PixelValueRangeByIndex[selectedIndex as RadarIndex] || [
                0, 0,
            ]
        );
    }, [selectedIndex]);

    const selectedPixelValueRange4Band2 = useMemo(() => {
        if (selectedIndex === 'ship' || selectedIndex === 'urban') {
            return selectedRange;
        }

        return null;
    }, [selectedIndex, selectedRange]);

    const rasterFunction = useMemo(() => {
        return new RasterFunction({
            functionName: RasterFunctionNameByIndx[selectedIndex],
        });
    }, [selectedIndex]);

    const initGroupLayer4MaskAndWaterLandLayers = () => {
        groupLayer4MaskAndWaterLandLayersRef.current = new GroupLayer({
            blendMode: shouldClip ? 'destination-atop' : null,
        });
        groupLayer.add(groupLayer4MaskAndWaterLandLayersRef.current);
    };

    useEffect(() => {
        initGroupLayer4MaskAndWaterLandLayers();
    }, []);

    useEffect(() => {
        if (!groupLayer4MaskAndWaterLandLayersRef.current) {
            return;
        }

        groupLayer4MaskAndWaterLandLayersRef.current.blendMode = shouldClip
            ? 'destination-atop'
            : 'normal';
    }, [shouldClip]);

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
                pixelColor={color}
            />

            <WaterLandMaskLayer
                visible={selectedIndex === 'ship' || selectedIndex === 'urban'}
                visibleCategory={selectedIndex === 'ship' ? 'water' : 'land'}
                groupLayer={groupLayer4MaskAndWaterLandLayersRef.current}
            />
        </>
    );
};