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

import React from 'react';
import { ScreenshotSaver } from './ScreenshotSaver';
import { useTranslation } from 'react-i18next';

export const ExpandedSpectralProfileChartHeader = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex items-center">
                <div className="bg-white w-[16px] h-[2px]"></div>
                <h4 className="ml-3">
                    {t('spectral_profile_selected_location')}
                </h4>
            </div>

            {/* <ScreenshotSaver />

            <calcite-icon
                class="cursor-pointer"
                title="Save profiles as a table"
                icon="table"
                scale="s"
            /> */}
        </div>
    );
};
