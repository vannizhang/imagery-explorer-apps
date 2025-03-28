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

// import { APP_NAME } from '@shared/config';
import React, { FC, useEffect, useRef } from 'react';
import { IS_MOBILE_DEVICE } from '@shared/constants/UI';
import { modeChanged } from '@shared/store/ImageryScene/reducer';
import { useAppDispatch } from '@shared/store/configureStore';
import { useTranslation } from 'react-i18next';

type Props = {
    content: string;
};

export const DynamicModeInfo: FC<Props> = ({ content }) => {
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const openFindASceneMode = () => {
        dispatch(modeChanged('find a scene'));
    };

    const instructionTextRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const element = instructionTextRef.current;

        if (!element) return;

        const openFindASceneLink = element.querySelector('.open-find-a-scene');

        if (!openFindASceneLink) return;

        openFindASceneLink?.addEventListener('click', (e) => {
            e.preventDefault();
            dispatch(modeChanged('find a scene'));
        });

        // ('click', openFindASceneMode, { once: true });
    }, []);

    return (
        <div className="max-w-sm ml-4 2xl:ml-10">
            <div className="text-center mb-3">
                <span className="uppercase text-sm">{t('dynamic_view')}</span>
            </div>

            <p className="text-sm opacity-80">{content}</p>

            {IS_MOBILE_DEVICE === false ? (
                <p
                    className="text-sm opacity-80 mt-2"
                    ref={instructionTextRef}
                    dangerouslySetInnerHTML={{
                        __html: t('dynamic_view_instruction'),
                    }} // TODO: remove this
                >
                    {/* To select an individual scene for a specific date, try the{' '}
                    <span
                        className="underline cursor-pointer hover:opacity-100"
                        onClick={openFindASceneMode}
                    >
                        FIND A SCENE
                    </span>{' '}
                    mode. */}
                </p>
            ) : null}
        </div>
    );
};
