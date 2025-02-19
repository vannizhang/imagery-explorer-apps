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
import React from 'react';

export const LandsatDynamicModeInfo = () => {
    return (
        <DynamicModeInfo content="In the current map display, the most recent and most cloud free scenes from the Landsat archive are prioritized and dynamically fused into a single mosaicked image layer. As you explore, the map continues to dynamically fetch and render the best available scenes." />
    );
};
