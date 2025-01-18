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

import { activeAnalysisToolChanged } from '@shared/store/ImageryScene/reducer';
import { AnalysisToolSelector } from './AnalysisToolSelector';
import {
    selectActiveAnalysisTool,
    selectAppMode,
} from '@shared/store/ImageryScene/selectors';
import React, { FC } from 'react';
import { useAppDispatch } from '@shared/store/configureStore';
import { useSelector } from 'react-redux';
import { AnalysisTool } from '@shared/store/ImageryScene/reducer';

export type AnalyzeToolSelectorData = {
    /**
     * analzye tool
     */
    tool: AnalysisTool;
    /**
     * title of the tool
     */
    title: string;
    /**
     * sub title to be displayed in another line
     */
    subtitle: string;
};

type Props = {
    data: AnalyzeToolSelectorData[];
};

export const AnalysisToolSelectorContainer: FC<Props> = ({ data }) => {
    const dispatch = useAppDispatch();

    const mode = useSelector(selectAppMode);

    const analysisTool = useSelector(selectActiveAnalysisTool);

    if (mode !== 'analysis') {
        return null;
    }

    return (
        <AnalysisToolSelector
            data={data}
            selectedTool={analysisTool}
            onChange={(tool) => {
                dispatch(activeAnalysisToolChanged(tool));
            }}
        />
    );
};
