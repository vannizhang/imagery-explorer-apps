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
import { DownloadJobStatus } from './DownloadPanel';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

type Props = {
    status: DownloadJobStatus;
    /**
     * emits when user clicks on cancel button to cancel the pending download job
     * @returns
     */
    cancelButtonOnClick: () => void;
    /**
     * emit when user clicks on the close button to hide the notification message
     * @returns
     */
    closeButtonOnClick: () => void;
};

export const DownloadJobStatusInfo: FC<Props> = ({
    status,
    cancelButtonOnClick,
    closeButtonOnClick,
}) => {
    const { t } = useTranslation();

    if (!status) {
        return null;
    }

    return (
        <div
            className={classNames(
                'absolute top-0 right-0 w-[220px] h-[72px] px-4',
                'flex items-center',
                'theme-background text-xs'
            )}
        >
            {status === 'pending' && (
                <div className="flex items-center">
                    <calcite-loader inline />
                    <span className="mr-1">{t('creating_mp4')}</span>
                    <span
                        className="underline cursor-pointer opacity-70 hover:opacity-100"
                        onClick={cancelButtonOnClick}
                    >
                        {t('cancel')}
                    </span>
                </div>
            )}

            {(status === 'finished' || status === 'failed') && (
                <div className="flex items-center">
                    <p className="mr-2">
                        {status === 'finished'
                            ? t('complete_check_browser_downloads')
                            : t('failed_to_create_mp4')}
                    </p>

                    <calcite-icon
                        icon="x"
                        style={
                            {
                                cursor: 'pointer',
                            } as React.CSSProperties
                        }
                        onClick={closeButtonOnClick}
                    />
                </div>
            )}
        </div>
    );
};
