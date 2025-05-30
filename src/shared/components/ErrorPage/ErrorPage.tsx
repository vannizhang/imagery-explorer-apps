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

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
    error?: Error;
};

export const ErrorPage: FC<Props> = ({ error }) => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center items-center w-screen h-screen theme-background text-custom-light-blue">
            <div className="max-w-2xl">
                <p>{t('app_temporarily_unavailable')}</p>

                {error && error.message ? (
                    <p className="mt-4 text-sm">
                        {t('error_message')}: {error.message}
                    </p>
                ) : null}
            </div>
        </div>
    );
};
