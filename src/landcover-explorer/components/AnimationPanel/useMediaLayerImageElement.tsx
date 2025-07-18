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

import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@shared/store/configureStore';
import { selectAnimationStatus } from '@shared/store/UI/selectors';

import IMapView from '@arcgis/core/views/MapView';
import ImageElement from '@arcgis/core/layers/support/ImageElement';
import ExtentAndRotationGeoreference from '@arcgis/core/layers/support/ExtentAndRotationGeoreference';
import { exportLandCoverImage } from './exportLandCoverImage';
import { exportSatelliteImage } from '../SatelliteImageryLayer/exportSatelliteImage';
import {
    // selectActiveLandCoverType,
    selectLandcoverAnimationYears,
    selectSatelliteImageryLayerAquisitionMonth,
    selectSatelliteImageryLayerRasterFunction,
    selectShouldShowSatelliteImageryLayer,
    selectTimeExtentByYear,
    selectYear,
} from '@shared/store/LandcoverExplorer/selectors';
import { getNormalizedExtent } from '@shared/utils/snippets/getNormalizedExtent';
// import { getRasterFunctionBySentinel2LandCoverClassName } from '@shared/services/sentinel-2-10m-landcover/rasterAttributeTable';
// import { getAvailableYears } from '@shared/services/sentinel-2-10m-landcover/timeInfo';
// import { Sentinel2LandCoverClassification } from '@typing/landcover';

type Props = {
    /**
     * Land cover service URL
     * This is used for the land cover layer
     */
    landCoverServiceUrl: string;
    /**
     * Satellite imagery service URL
     * This is used for the Sentinel-2 imagery layer or landsat imagery layer
     */
    satellteImageryServiceUrl: string;
    landcoverLayerRasterFunctionName: string;
    mapView?: IMapView;
};

const useMediaLayerImageElement = ({
    landCoverServiceUrl,
    satellteImageryServiceUrl,
    landcoverLayerRasterFunctionName,
    mapView,
}: Props) => {
    const [imageElements, setImageElements] = useState<ImageElement[]>(null);

    const timeExtentByYear = useAppSelector(selectTimeExtentByYear);

    const imageUrlsRef = useRef<string[]>([]);

    const abortControllerRef = useRef<AbortController>();

    // const years = getAvailableYears();

    const years = useAppSelector(selectLandcoverAnimationYears);

    const satelliteImageryAquisitionMonth = useAppSelector(
        selectSatelliteImageryLayerAquisitionMonth
    );

    const satelliteImageryRasterFunction = useAppSelector(
        selectSatelliteImageryLayerRasterFunction
    );

    const shouldShowSatelliteImageryLayer = useAppSelector(
        selectShouldShowSatelliteImageryLayer
    );

    // const activeLandCoverType = useAppSelector(selectActiveLandCoverType);

    const animationMode = useAppSelector(selectAnimationStatus);

    const loadFrameData = async () => {
        if (!mapView) {
            return;
        }

        // use a new abort controller so the pending requests can be cancelled
        // if user quits animation mode before the responses are returned
        abortControllerRef.current = new AbortController();

        try {
            const { width, height } = mapView;

            const extent = getNormalizedExtent(mapView.extent);

            const { xmin, ymin, xmax, ymax } = extent;

            // get images via export image request from land cover layer or sentinel-2 layer
            const requests = years.map((year) => {
                return shouldShowSatelliteImageryLayer
                    ? exportSatelliteImage({
                          serviceUrl: satellteImageryServiceUrl,
                          extent,
                          width,
                          height,
                          year,
                          month: satelliteImageryAquisitionMonth,
                          rasterFunctionName: satelliteImageryRasterFunction,
                          abortController: abortControllerRef.current,
                      })
                    : exportLandCoverImage({
                          serviceUrl: landCoverServiceUrl,
                          extent,
                          width,
                          height,
                          year,
                          rasterFunctionName: landcoverLayerRasterFunctionName,
                          //   getRasterFunctionBySentinel2LandCoverClassName(
                          //       activeLandCoverType as Sentinel2LandCoverClassification
                          //   ),
                          timeExtentData: timeExtentByYear[year],
                          abortController: abortControllerRef.current,
                      });
            });

            const responses = await Promise.all(requests);
            console.log('responses', responses);

            // once responses are received, get array of image elements using the binary data returned from export image requests
            const imageElements = responses.map((blob) => {
                const url = URL.createObjectURL(blob);
                imageUrlsRef.current.push(url);

                return new ImageElement({
                    image: url,
                    georeference: new ExtentAndRotationGeoreference({
                        extent: {
                            spatialReference: {
                                wkid: 102100,
                            },
                            xmin,
                            ymin,
                            xmax,
                            ymax,
                        },
                    }),
                    opacity: 0,
                });
            });

            setImageElements(imageElements);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (!animationMode) {
            // call abort so all pending requests can be cancelled
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }

            // // call revokeObjectURL so these image elements can be freed from the memory
            // if (imageElements) {
            //     for (const elem of imageElements) {
            //         URL.revokeObjectURL(elem.image as string);
            //     }
            // }
            for (const url of imageUrlsRef.current) {
                URL.revokeObjectURL(url);
            }
            imageUrlsRef.current = [];

            setImageElements(null);
        } else if (animationMode === 'loading') {
            loadFrameData();
        }
    }, [animationMode]);

    return imageElements;
};

export default useMediaLayerImageElement;
