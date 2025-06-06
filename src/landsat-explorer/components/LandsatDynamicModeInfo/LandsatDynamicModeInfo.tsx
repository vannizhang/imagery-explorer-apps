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

import { DynamicModeInfo } from '@shared/components/DynamicModeInfo';
import { APP_NAME } from '@shared/config';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LandsatDynamicModeInfo = () => {
    const { t } = useTranslation();

    return (
        <DynamicModeInfo
            content={t('dynamic_info_description', {
                ns: APP_NAME,
            })}
        />
    );
};
