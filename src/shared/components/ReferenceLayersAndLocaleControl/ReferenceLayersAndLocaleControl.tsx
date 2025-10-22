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

// import {
//     showMapLabelToggled,
//     showTerrainToggled,
//     showBasemapToggled,
// } from '@shared/store/Map/reducer';
// import {
//     selectShowMapLabel,
//     selectShowTerrain,
//     selectShowBasemap,
// } from '@shared/store/Map/selectors';
// import { selectAnimationStatus } from '@shared/store/UI/selectors';
import classNames from 'classnames';
import React, { FC } from 'react';
// import { useAppDispatch } from '@shared/store/configureStore';
// import { useAppSelector } from '@shared/store/configureStore';
// import { useTranslation } from 'react-i18next';
import { ReferenceLayersToggleControl } from './ReferenceLayersToggleControl';

type ToggleButtonProps = {
    label: string;
    active: boolean;
    onToggle: () => void;
};

type Props = {
    shoudHide: boolean;
};

export const ReferenceLayersAndLocaleControl: FC<Props> = ({ shoudHide }) => {
    return (
        <div
            className={classNames(
                'absolute bg-custom-background flex  px-1 text-custom-light-blue text-xs top-map-ui-top-position',
                {
                    hidden: shoudHide,
                }
            )}
            style={{
                right: 15, // this is the margin to right value of JSAPI search Widget
            }}
        >
            <ReferenceLayersToggleControl />
        </div>
    );
};
