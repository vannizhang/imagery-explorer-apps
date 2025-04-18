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

import Singapre from './thumbnails/Singapre.jpg';
import Amazon from './thumbnails/Amazon.jpg';
import CraterLake from './thumbnails/CraterLakeAlt.jpg';
import Garig from './thumbnails/Garig.jpg';
import Richat from './thumbnails/Richat.jpg';
import Torshavn from './thumbnails/Torshavn.jpg';

import { InterestingPlaceData } from '@typing/shared';

/**
 * Array of interesting places data for the Sentinel-1 Explorer application.
 *
 * Each object represents a location of interest with:
 * - key: Unique identifier for the location
 * - location: Geographic coordinates with center point and zoom level
 * - renderer: The visualization method used for the SAR data
 * - thumbnail: Reference to the thumbnail image
 * - name: Key to the translation file for the location name
 * - label: Key to the translation file for the location label/subtitle
 * - description: Key to the translation file for the detailed description
 *
 * Note: There are commented-out sections containing the actual English text
 * values, but the application uses translation keys instead.
 */
export const data: InterestingPlaceData[] = [
    {
        key: 'singapore',
        location: {
            center: [103.82475, 1.25343],
            zoom: 13.953,
        },
        renderer: 'VV dB Colorized',
        thumbnail: Singapre,
        name: 'singapore_name',
        label: 'singapore_label',
        description: 'singapore_description',
        // name: 'Singapore',
        // label: 'Port of Singapore',
        // description:
        //     'Due to its strategic location in maritime Southeast Asia, the city of Singapore is home to one of the busiest shipping ports in the world. One fifth of the worlds shipping containers pass through the Port of Singapore. Here you can visually depict shipping vessels in the waters off the southern tip of the Malay Peninsula.',
    },
    {
        key: 'crater_lake',
        location: {
            center: [-122.10872, 42.94143],
            zoom: 13,
        },
        renderer: 'SWI Colorized',
        thumbnail: CraterLake,
        name: 'crater_lake_name',
        label: 'crater_lake_label',
        description: 'crater_lake_description',
        // name: 'Crater Lake',
        // label: '',
        // description:
        //     'Crater Lake sits in a volcanic crater in South-central Oregon in the Western United States. The lake partially fills the caldera left by the collapse of Mount Mazama thousands of years ago. With a maximum depth of 2,148 feet (655 meters) it is the deepest lake in the United States and ranks tenth deepest in the world. Here, the body of the lake is depicted using the Sentinel-1 SAR Water Index (SWI).',
    },
    {
        key: 'torshavn',
        location: {
            center: [-6.75967, 62.00664],
            zoom: 12,
        },
        renderer: 'False Color dB with DRA',
        thumbnail: Torshavn,
        name: 'torshavn_name',
        label: 'torshavn_label',
        description: 'torshavn_description',
        // name: 'Tórshavn',
        // label: 'Tórshavn, Faroe Islands',
        // description:
        //     'Tórshavn is the capital and largest city of the Faroe Islands. It is among the cloudiest places in the world averaging only 2.4 hours of sunshine per day and 840 hours per year. Since SAR signals penetrate clouds, Sentinel-1 can collect imagery of the islands even when they are enshrouded with clouds.',
    },
    {
        key: 'amazon_estuary',

        location: {
            center: [-51.05776, -0.39478],
            zoom: 11,
        },
        renderer: 'Water Anomaly Index Colorized',
        thumbnail: Amazon,
        name: 'amazon_estuary_name',
        label: 'amazon_estuary_label',
        description: 'amazon_estuary_description',
        // name: 'Amazon Estuary',
        // label: '',
        // description:
        //     'The Amazon River in South America is the largest river by discharge volume of water in the world and two of the top ten rivers by discharge are tributaries of the Amazon. The river has an average discharge of about 6,591–7,570 km³ (1,581–1,816 mi³) per year, greater than the next seven largest independent rivers combined. The high concentrations of sediment the Amazon carries, and discharges into the Atlantic Ocean, lights up here with this rendering of a water anomaly index.',
    },
    {
        key: 'richat',
        location: {
            center: [-11.398, 21.124],
            zoom: 12,
        },
        renderer: 'VH dB Colorized',
        thumbnail: Richat,
        name: 'richat_name',
        label: 'richat_label',
        description: 'richat_description',
        // name: 'Richat',
        // label: 'Richat Structure (Eye of the Sahara)',
        // description:
        //     'The Richat Structure, also known as the Eye of the Sahara, is a prominent circular geological feature in the Sahara Desert. It is an eroded geological dome, 40 km (25 mi) in diameter, exposing sedimentary rock in layers that appear as concentric rings.',
    },
    {
        key: 'gunak_barlu',
        location: {
            center: [132.21062, -11.36392],
            zoom: 11,
        },
        renderer: 'False Color dB with DRA',
        thumbnail: Garig,
        name: 'gunak_barlu_name',
        label: 'gunak_barlu_label',
        description: 'gunak_barlu_description',
        // name: 'Gunak Barlu',
        // label: 'Garig Gunak Barlu National Park',
        // description:
        //     'Garig Gunak Barlu is a national park in the Northern Territory of Australia on the Cobourg Peninsula. Its name derives from the local Garig language, and the words gunak (land) and barlu (deep water). It is categorized as an IUCN Category II protected area and is home to all six species of Australian marine turtles: green sea turtles, hawksbill sea turtles, flatback sea turtles, leatherback sea turtles, and olive ridley sea turtles.',
    },
];
