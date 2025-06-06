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

// export const getMosaicRuleByObjectId = (objectId: number) => {
//     return {
//         ascending: false,
//         lockRasterIds: [objectId],
//         mosaicMethod: 'esriMosaicLockRaster',
//         where: `objectid in (${objectId})`,
//     };
// };

/**
 * Get mosaic rule that only displays the selected rasters.
 * @param objectIds
 * @returns
 *
 * @see https://developers.arcgis.com/rest/services-reference/enterprise/mosaic-rules/#lockraster
 */
export const getLockRasterMosaicRule = (objectIds: number[]) => {
    return {
        ascending: false,
        lockRasterIds: objectIds,
        mosaicMethod: 'esriMosaicLockRaster',
        where: `objectid in (${objectIds.join(',')})`,
    };
};

/**
 * Orders rasters based on the absolute distance between their values of an attribute and a base value.
 * @param objectIds
 * @returns
 *
 * @see https://developers.arcgis.com/rest/services-reference/enterprise/mosaic-rules/#lockraster
 */
export const getByAttributeMosaicRule = (
    sortField: string,
    sortValue: string
) => {
    return {
        ascending: true,
        mosaicMethod: 'esriMosaicAttribute',
        mosaicOperation: 'MT_FIRST',
        sortField,
        sortValue,
    };
};
