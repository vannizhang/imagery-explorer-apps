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

import {
    TemporalCompositeToolState,
    initialState4TemporalCompositeTool,
} from '@shared/store/TemporalCompositeTool/reducer';
import { getHashParamValueByKey, updateHashParams } from '.';

const encodeTemporalCompositeTool = (
    data: TemporalCompositeToolState
): string => {
    if (!data) {
        return null;
    }

    const { isTemporalCompositeLayerOn, rasterFunction } = data;

    return [isTemporalCompositeLayerOn, rasterFunction].join('|');
};

const decodeTemporalCompositeTool = (
    val: string
): TemporalCompositeToolState => {
    if (!val) {
        return null;
    }

    const [isTemporalCompositeLayerOn, rasterFunction] = val.split('|');

    return {
        isTemporalCompositeLayerOn: isTemporalCompositeLayerOn === 'true',
        rasterFunction: rasterFunction || '',
    } as TemporalCompositeToolState;
};

export const saveTemporalCompositeToolStateToHashParams = (
    data: TemporalCompositeToolState
) => {
    updateHashParams('composite', encodeTemporalCompositeTool(data));
};

export const getTemporalCompositeToolDataFromHashParams = (
    hashParams: URLSearchParams
): TemporalCompositeToolState => {
    const value = getHashParamValueByKey('composite', hashParams);
    return decodeTemporalCompositeTool(value);
};
