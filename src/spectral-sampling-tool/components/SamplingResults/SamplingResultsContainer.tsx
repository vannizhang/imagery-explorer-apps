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

import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useChartData } from './useChartData';
import { SpectralProfileChart } from '@shared/components/SpectralProfileTool';
// import { Button } from '@shared/components/Button';
import { SaveSamplingResults } from './SaveSamplingResults';
import { useNumOfBandsToDisplay } from './useNumOfBandsToDisplay';
import { useBandNames } from './useBandNames';
import { useAppSelector } from '@shared/store/configureStore';
import {
    selectClassifictionNameOfSpectralSamplingTask,
    selectTargetService,
} from '@shared/store/SpectralSamplingTool/selectors';

export const SamplingResultsContainer = () => {
    const targetService = useAppSelector(selectTargetService);

    const numOfBandsToDisplay = useNumOfBandsToDisplay();

    const bandNames = useBandNames(numOfBandsToDisplay);

    const chartData = useChartData(numOfBandsToDisplay);

    const sessionName = useAppSelector(
        selectClassifictionNameOfSpectralSamplingTask
    );

    return (
        <div
            className={classNames('w-[300px] h-full mx-2', {
                'is-disabled': chartData.length === 0,
            })}
        >
            <div className="text-center">
                <span className="uppercase text-sm ml-1">
                    {/* Spectral Sampling Results */}
                    {targetService} | {sessionName}
                </span>
            </div>

            {chartData.length === 0 ? (
                <div className="w-full mt-10 flex justify-center text-center">
                    <p className="text-sm opacity-80 w-3/4">
                        Add spectral sampling points on the map to view the
                        results.
                    </p>
                </div>
            ) : (
                <>
                    <div className="w-full h-[140px] my-2">
                        <SpectralProfileChart
                            chartData={chartData}
                            bottomAxisTickText={bandNames}
                        />
                    </div>

                    <SaveSamplingResults
                        bandNames={bandNames}
                        targetService={targetService}
                    />
                </>
            )}
        </div>
    );
};
