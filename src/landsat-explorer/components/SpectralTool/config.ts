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
    LandCoverType,
    SpectralProfileDataByLandCoverType,
} from '@shared/components/SpectralProfileTool';

/**
 * The typical spectral profiles data from the config file used by the legacy Landsat Explorer app,
 * and the data prepared using `/scripts/landsat-spectral-signatures`.
 *
 * @see https://github.com/Esri/Imagery-Apps/blob/master/Landsat%20Explorer/configs/Identify/config_Identify.json
 */
export const LandsatSpectralProfileData: SpectralProfileDataByLandCoverType = {
    // Cloud: [0.88802, 0.90596, 0.88938, 0.91148, 0.93778, 0.5457, 0.37914],
    // 'Snow/Ice': [1.0, 1.0, 1.0, 1.0, 0.99766, 0.09434, 0.09942],
    // Desert: [0.17706, 0.18228, 0.2431, 0.37778, 0.48144, 0.58394, 0.53018],
    // 'Dry Vegetation': [
    //     0.13158, 0.12318, 0.14104, 0.2288, 0.3176, 0.38448, 0.32216,
    // ],
    // Concrete: [0.21304, 0.20938, 0.21138, 0.22594, 0.24366, 0.24868, 0.22404],
    // 'Lush Vegetation': [
    //     0.124, 0.1081, 0.10306, 0.10386, 0.3045, 0.24492, 0.15402,
    // ],
    // Urban: [0.14642, 0.12864, 0.11496, 0.10828, 0.21502, 0.17398, 0.12308],
    // Water: [0.1225, 0.0997, 0.0663, 0.0375, 0.07786, 0.01908, 0.00878],
    // Rock: [0.13328, 0.11964, 0.11348, 0.12786, 0.15856, 0.20198, 0.16054],
    // Forest: [0.09838, 0.0769, 0.06862, 0.03962, 0.31248, 0.12792, 0.0514],

    // Below are samples created using the Spectral Sampling Tool
    Cloud: [
        0.857897588235294, 0.8559244705882353, 0.8188468235294117, 0.814538,
        0.8126588235294118, 0.3819854705882353, 0.33116735294117644,
    ],
    'Clear Water': [0.01059, 0.0117, 0.00713, 0, 0, 0.00521, 0.005326],
    'Turbid Water': [
        0.05215, 0.0656933, 0.101369, 0.1095482, 0.056553, 0.018179, 0.012963,
    ],
    'Snow and Ice': [
        0.939066, 0.9954512, 0.93017, 0.91085, 0.786022, 0.05695, 0.0773366,
    ],
    Sand: [0.164278, 0.196677, 0.28291, 0.357752, 0.428439, 0.478017, 0.429415],
    'Bare Soil': [
        0.08618094736842107, 0.10744276315789475, 0.1598273157894737,
        0.20813336842105265, 0.3001382105263158, 0.3997416842105263,
        0.33378657894736835,
    ],
    'Paved Surface': [
        0.11725219444444443, 0.14198388888888888, 0.19084527777777777,
        0.21853155555555553, 0.25032027777777777, 0.28419405555555555,
        0.27332533333333336,
    ],
    Trees: [
        0.01107162, 0.015078519, 0.03607375, 0.023981898, 0.280197889,
        0.109689731, 0.044492824,
    ],
    'Healthy Vegetation': [
        0.033223833333333334, 0.037222333333333336, 0.07134983333333333,
        0.047652166666666676, 0.49058359999999995, 0.2220663333333333,
        0.10323136666666667,
    ],
    'Dry Vegetation': [
        0.04656958333333333, 0.06172055555555557, 0.10025719444444443,
        0.1218418611111111, 0.2959915555555555, 0.27254927777777777,
        0.1819168888888889,
    ],
};
