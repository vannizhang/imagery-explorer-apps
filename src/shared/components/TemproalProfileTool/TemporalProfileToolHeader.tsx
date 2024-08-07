/* Copyright 2024 Esri
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

import { selectSelectedIndex4TrendTool } from '@shared/store/TrendTool/selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AnalysisToolHeader } from '../AnalysisToolHeader';
import { RadarIndex, SpectralIndex } from '@typing/imagery-service';
import { useDispatch } from 'react-redux';
import { selectedIndex4TrendToolChanged } from '@shared/store/TrendTool/reducer';

type Props = {
    options: {
        value: SpectralIndex | RadarIndex;
        label: string;
    }[];
    tooltipText: string;
};

export const TemporalProfileToolHeader: FC<Props> = ({
    options,
    tooltipText,
}) => {
    const dispatch = useDispatch();

    const spectralIndex = useSelector(selectSelectedIndex4TrendTool);

    return (
        <AnalysisToolHeader
            title="Trend"
            dropdownListOptions={options}
            selectedValue={spectralIndex}
            dropdownMenuSelectedItemOnChange={(val) => {
                dispatch(selectedIndex4TrendToolChanged(val as SpectralIndex));
            }}
            tooltipText={tooltipText}
        />
    );
};
