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

import Ganges from './thumbnails/landsat/Ganges_SWIR.jpg';
import GrandCanyon from './thumbnails/landsat/GrandCanyon.jpg';
import Richat from './thumbnails/landsat/Richat.png';
import KalahariDunes from './thumbnails/landsat/KalahariDunes.jpg';
import KuisebCanyon from './thumbnails/landsat/KuisebCanyon.jpg';
import Quelccaya from './thumbnails/landsat/Quelccaya.jpg';
// import RupertBay from './thumbnails/landsat/RupertBay.jpg';
import ThreeGorges from './thumbnails/landsat/ThreeGorges.jpg';
import DashteKevir from './thumbnails/landsat/Dasht-eKevir.jpg';
import Ouarkziz from './thumbnails/landsat/Ouarkziz.jpg';
import EtoshaPan from './thumbnails/landsat/EtoshaPan.jpg';
import LakeMackay from './thumbnails/landsat/LakeMackay.jpg';
import GossesBluff from './thumbnails/landsat/GossesBluff.png';
import { InterestingPlaceData } from '@typing/shared';

export const data: InterestingPlaceData[] = [
    {
        key: 'ganges-delta',
        // name: 'Ganges Delta',
        name: 'ganges_delta_name',
        label: 'ganges_delta_label',
        description: 'ganges_delta_description',
        location: {
            center: [89.08, 21.909],
            zoom: 11.557,
        },
        renderer: 'Short-wave Infrared for Visualization',
        thumbnail: Ganges,
        // description:
        //     "The Ganges Delta is a river delta in Eastern South Asia. It is the world's largest river delta and it empties into the Bay of Bengal with the combined waters of several river systems.",
    },
    {
        key: 'grand-canyon',
        name: 'grand_canyon_name',
        label: 'grand_canyon_label',
        description: 'grand_canyon_description',
        // name: 'Grand Canyon',
        location: {
            center: [-112.913, 36.242],
            zoom: 12.43,
        },
        renderer: 'Short-wave Infrared for Visualization',
        thumbnail: GrandCanyon,
        // description:
        //     'The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of more than one mile (1,857 meters).',
    },
    {
        key: 'lake-mackay',
        // name: 'Lake Mackay',
        name: 'lake_mackay_name',
        label: 'lake_mackay_label',
        description: 'lake_mackay_description',
        location: {
            center: [128.736, -22.494],
            zoom: 12,
        },
        renderer: 'Agriculture for Visualization',
        thumbnail: LakeMackay,
        // description:
        //     'Lake Mackay, known as Wilkinkarra to the Indigenous Pintupi people. With a surface area of 3,494 sq km (1,349 sq mi), it is the largest of hundreds of ephemeral salt lakes scattered throughout Western Australia and the Northern Territory.',
    },
    {
        key: 'richat',
        // name: 'Richat',
        name: 'richat_name',
        label: 'richat_label',
        description: 'richat_description',
        location: {
            center: [-11.398, 21.124],
            zoom: 12.43,
        },
        renderer: 'Geology for Visualization',
        thumbnail: Richat,
        // label: 'Richat Structure (Eye of the Sahara)',
        // description:
        //     'The Richat Structure is a prominent circular geological feature in the Sahara Desert. It is an eroded geological dome, 40 km (25 mi) in diameter, exposing sedimentary rock in layers that appear as concentric rings.',
    },
    {
        key: 'kalahari-dunes',
        // name: 'Kalahari Dunes',
        name: 'kalahari_dunes_name',
        label: 'kalahari_dunes_label',
        description: 'kalahari_dunes_description',
        location: {
            center: [18.476, -23.914],
            zoom: 11.692,
        },
        renderer: 'Geology for Visualization',
        thumbnail: KalahariDunes,
        // description:
        //     'The Kalahari Desert is a large semi-arid sandy savanna in Southern Africa. Linear dunes, such as these, typically form in arid environments with consistent wind patterns.',
    },
    {
        key: 'kuiseb-canyon',
        // name: 'Kuiseb Canyon',
        name: 'kuiseb_canyon_name',
        label: 'kuiseb_canyon_label',
        description: 'kuiseb_canyon_description',
        location: {
            center: [15.398, -23.68],
            zoom: 12.43,
        },
        renderer: 'Color Infrared for Visualization',
        thumbnail: KuisebCanyon,
        // description:
        //     'The Kuiseb Canyon has been carved out over millions of years by the ephemeral Kuiseb River in this barren and inaccessible area of Namibia, Africa. It is characterized by its rock formations, steep cliffs, and unique ecosystems.',
    },
    {
        key: 'quelccaya',
        // name: 'Quelccaya',
        name: 'quelccaya_name',
        label: 'quelccaya_label',
        description: 'quelccaya_description',
        location: {
            center: [-70.819, -13.943],
            zoom: 12.43,
        },
        renderer: 'Short-wave Infrared for Visualization',
        thumbnail: Quelccaya,
        // label: 'Quelccaya Ice Cap',
        // description:
        //     'The Quelccaya Ice Cap is the second largest glaciated area in the tropics. Located in tropical highlands of the Andes mountains in southern Peru, the cap covers an area of 42.8 sq km (16.5 sq mi) with ice up to 200 meters (660 ft) thick.',
    },
    {
        key: 'gosses-bluff',
        // name: 'Gosses Bluff',
        name: 'gosses_bluff_name',
        label: 'gosses_bluff_label',
        description: 'gosses_bluff_description',
        location: {
            center: [132.307, -23.815],
            zoom: 12,
        },
        renderer: 'Agriculture for Visualization',
        thumbnail: GossesBluff,
        // description:
        //     'Gosses Bluff, located in the Northern Territory of Australia, is the eroded remnant of an impact crater believed to have been formed by an asteroid impact about 142 million years ago. The circular bluff formation in the center of the crater is believed to be the crater’s central uplift, or rock displacement, from the original impact.',
    },
    {
        key: 'three-gorges',
        // name: 'Three Gorges',
        name: 'three_gorges_name',
        label: 'three_gorges_label',
        description: 'three_gorges_description',
        location: {
            center: [110.947, 30.862],
            zoom: 12.43,
        },
        renderer: 'Agriculture for Visualization',
        thumbnail: ThreeGorges,
        // label: 'Three Gorges Dam',
        // description:
        //     "The Three Gorges Dam is a hydroelectric gravity dam that spans the Yangtze River in central China, downstream of the Three Gorges. It is the world's largest power station in terms of installed capacity, but it also serves to reduce the potential for flooding downstream, which historically plagued the Yangtze Plain.",
    },
    {
        key: 'dasht-e-kevir',
        // name: 'Dasht-e Kevir',
        name: 'dasht_e_kevir_name',
        label: 'dasht_e_kevir_label',
        description: 'dasht_e_kevir_description',
        location: {
            center: [54.557, 34.57],
            zoom: 11,
        },
        renderer: 'Short-wave Infrared for Visualization',
        thumbnail: DashteKevir,
        // description:
        //     'Dasht-e Kavir, also known as the Great Salt Desert, is a large desert lying in the middle of the Iranian Plateau. The unique landscape here is comprised of sinuous valleys, shallow lakes, mudflats, and salt marshes.',
    },
    {
        key: 'ouarkziz',
        // name: 'Ouarkziz',
        name: 'ouarkziz_name',
        label: 'ouarkziz_label',
        description: 'ouarkziz_description',
        location: {
            center: [-7.531, 29.021],
            zoom: 12,
        },
        renderer: 'Agriculture for Visualization',
        thumbnail: Ouarkziz,
        // label: 'Ouarkziz Crater',
        // description:
        //     'Ouarkziz is a meteorite impact crater in Algeria. It is 3.5 kilometers in diameter and the age is estimated to be less than 70 million years. Originally called Tindouf, the crater has been heavily eroded since its formation. Its circular morphology is highlighted by exposures of older sedimentary rock layers.',
    },
    {
        key: 'etosha-pan',
        // name: 'Etosha Pan',
        name: 'etosha_pan_name',
        label: 'etosha_pan_label',
        description: 'etosha_pan_description',
        location: {
            center: [16.4, -18.746],
            zoom: 10,
        },
        renderer: 'Short-wave Infrared for Visualization',
        thumbnail: EtoshaPan,
        // description:
        //     'The Etosha Pan is a large endorheic salt pan in the north of Namibia. Measuring 120 km (75 mi) long, this vast lakebed is periodically flooded with a thin layer of water, which is heavily salted by the mineral deposits on the surface.',
    },
];
