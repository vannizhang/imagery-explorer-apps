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

import { getPreloadedState4ImageryScenes } from './getPreloadedState';
import { InterestingPlaceData } from '@typing/shared';
import { initialImagerySceneState } from './reducer';

describe('getPreloadedState4ImageryScenes', () => {
    const randomInterestingPlace: InterestingPlaceData = {
        key: 'interesting-place-1',
        name: 'Interesting Place 1',
        location: {
            center: [-117.1825, 34.0556],
            zoom: 10,
        },
        renderer: 'NDVI',
        thumbnail: null,
    };

    const defaultRasterFunction = 'Natural Color for Visualization';

    it('should return initial state with dynamic mode', () => {
        const hashParams = new URLSearchParams();
        const state = getPreloadedState4ImageryScenes(
            hashParams,
            randomInterestingPlace,
            defaultRasterFunction
        );

        expect(state.mode).toBe('dynamic');
        expect(state).toEqual({
            ...initialImagerySceneState,
            mode: 'dynamic',
            tool: 'mask',
            queryParams4MainScene: {
                ...initialImagerySceneState.queryParams4MainScene,
                rasterFunctionName: randomInterestingPlace.renderer,
            },
            queryParams4SecondaryScene: {
                ...initialImagerySceneState.queryParams4SecondaryScene,
                rasterFunctionName: defaultRasterFunction,
            },
            queryParamsList: {
                byId: {},
                ids: [],
                selectedItemID: null,
            },
        });
    });

    it('should handle query params for main and secondary scenes', () => {
        const hashParams = new URLSearchParams(
            `mode=swipe&mainScene=2024-06-16|Natural Color with DRA|0&secondaryScene=2025-01-12|Color Infrared with DRA|1`
        );

        const state = getPreloadedState4ImageryScenes(
            hashParams,
            null,
            defaultRasterFunction
        );

        expect(state).toMatchObject({
            ...initialImagerySceneState,
            mode: 'swipe',
            queryParams4MainScene: {
                uniqueId: null,
                objectIdOfSelectedScene: 0,
                rasterFunctionName: 'Natural Color for Visualization',
                acquisitionDate: '2024-06-16',
                acquisitionDateRange: {
                    startDate: '2024-01-01',
                    endDate: '2024-12-31',
                },
            },
            queryParams4SecondaryScene: {
                uniqueId: null,
                objectIdOfSelectedScene: 1,
                rasterFunctionName: 'Color Infrared for Visualization',
                acquisitionDate: '2025-01-12',
                acquisitionDateRange: {
                    startDate: '2025-01-01',
                    endDate: '2025-12-31',
                },
            },
        });
    });

    it('should handle list of query params from hash params', () => {
        const hashParams = new URLSearchParams(
            `mode=animate&animationScenes=2023-02-01|Natural Color with DRA|100,2024-04-01|Short-wave Infrared with DRA|101,2025-01-01|NDVI Colorized|102`
        );

        const state = getPreloadedState4ImageryScenes(
            hashParams,
            randomInterestingPlace,
            defaultRasterFunction
        );

        expect(state).toMatchObject({
            mode: 'animate',
            queryParamsList: {
                byId: {
                    '1': {
                        uniqueId: '1',
                        objectIdOfSelectedScene: 100,
                        rasterFunctionName: 'Natural Color for Visualization',
                        acquisitionDate: '2023-02-01',
                        acquisitionDateRange: {
                            startDate: '2023-01-01',
                            endDate: '2023-12-31',
                        },
                    },
                    '2': {
                        uniqueId: '2',
                        objectIdOfSelectedScene: 101,
                        rasterFunctionName:
                            'Short-wave Infrared for Visualization',
                        acquisitionDate: '2024-04-01',
                        acquisitionDateRange: {
                            startDate: '2024-01-01',
                            endDate: '2024-12-31',
                        },
                    },
                    '3': {
                        uniqueId: '3',
                        objectIdOfSelectedScene: 102,
                        rasterFunctionName: 'NDVI Colorized for Visualization',
                        acquisitionDate: '2025-01-01',
                        acquisitionDateRange: {
                            startDate: '2025-01-01',
                            endDate: '2025-12-31',
                        },
                    },
                },
                ids: ['1', '2', '3'],
                selectedItemID: '1',
            },
        });
    });
});
