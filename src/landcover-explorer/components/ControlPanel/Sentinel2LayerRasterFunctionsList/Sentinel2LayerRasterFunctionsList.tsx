// /* Copyright 2025 Esri
//  *
//  * Licensed under the Apache License Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *     http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

// import classNames from 'classnames';
// import React, { FC, useRef } from 'react';
// import useGetTooltipPositionOnHover from '@shared/hooks/useGetTooltipPositionOnHover';
// import { TooltipData } from '@shared/store/UI/reducer';
// import HeaderText from '../HeaderText/HeaderText';
// import {
//     RasterFunctionData,
//     // Sentinel2RasterFunction,
// } from './Sentinel2LayerRasterFunctionsListContainer';
// import { useTranslation } from 'react-i18next';
// import { APP_NAME } from '@shared/config';
// import { ImageryRasterFunction4LandcoverApp } from '@shared/store/LandcoverExplorer/reducer';

// type Props = {
//     data: RasterFunctionData[];
//     selectedRasterFunction?: ImageryRasterFunction4LandcoverApp;
//     onSelect: (data?: ImageryRasterFunction4LandcoverApp) => void;
//     /**
//      * Fires when users hovers a land cover item in th list
//      */
//     itemOnHover: (data?: TooltipData) => void;
//     /**
//      * If true, all items are disabled, this can happen when the animation mode is on
//      */
//     disabled?: boolean;
// };

// const Sentinel2LayerRasterFunctionsList: FC<Props> = ({
//     data,
//     selectedRasterFunction,
//     disabled,
//     onSelect,
//     itemOnHover,
// }: Props) => {
//     const containerRef = useRef<HTMLDivElement>();
//     useGetTooltipPositionOnHover(containerRef);

//     const { t } = useTranslation();

//     return (
//         <div className="text-center mx-4 my-4 md:my-0" ref={containerRef}>
//             <HeaderText
//                 title={t('sentinel2_renderers_title', { ns: APP_NAME })}
//                 subTitle={t('sentinel2_renderers_subtitle', { ns: APP_NAME })}
//             />

//             <div
//                 className={classNames('grid grid-cols-2 h-28 text-sm mt-4', {
//                     'disabled-when-animation-mode-is-on': disabled,
//                 })}
//             >
//                 {data.map((d) => {
//                     const {
//                         name,
//                         label,
//                         description,
//                         thumbnail,
//                         translationKeyDescription,
//                         translationKeyLabel,
//                     } = d;

//                     const isSelected = name === selectedRasterFunction;

//                     return (
//                         <div
//                             key={name}
//                             className={classNames(
//                                 'flex items-center mx-3 2xl:mx-6 mb-2 cursor-pointer',
//                                 {
//                                     'opacity-50':
//                                         selectedRasterFunction &&
//                                         isSelected === false,
//                                 }
//                             )}
//                             onClick={onSelect.bind(null, name)}
//                             onMouseEnter={() => {
//                                 itemOnHover({
//                                     content: t(translationKeyDescription, {
//                                         ns: APP_NAME,
//                                     }),
//                                 });
//                             }}
//                             onMouseLeave={() => {
//                                 itemOnHover(null);
//                             }}
//                         >
//                             <img src={thumbnail} />
//                             <span className="ml-2 text-xs 2xl:text-sm">
//                                 {t(translationKeyLabel, { ns: APP_NAME })}
//                             </span>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Sentinel2LayerRasterFunctionsList;
