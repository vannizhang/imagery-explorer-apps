import { Geometry, Point } from 'esri/geometry';
import { LANDSAT_LEVEL_2_SERVICE_URL } from './config';
import { IFeature } from '@esri/arcgis-rest-feature-service';

type IdentifyTaskParams = {
    point: Point;
    abortController: AbortController;
};

type IdentifyTaskResponse = {
    catalogItems: {
        features: IFeature[];
        geometryType: string;
        objectIdFieldName: string;
    };
    location: Geometry;
    value: string;
    name: string;
    properties: {
        Values: string[];
    };
};

/**
 * The identify operation is performed on Landsat-2 image service resource.
 * It identifies the content of an image service for a given location, mosaic rule, and rendering rule or rules.
 *
 * @param param0
 * @returns
 *
 * @see https://developers.arcgis.com/rest/services-reference/enterprise/identify-image-service-.htm
 */
export const identify = async ({
    point,
    abortController,
}: IdentifyTaskParams): Promise<IdentifyTaskResponse> => {
    const params = new URLSearchParams({
        f: 'json',
        maxItemCount: '1',
        returnGeometry: 'false',
        returnCatalogItems: 'true',
        geometryType: 'esriGeometryPoint',
        geometry: JSON.stringify(point),
        mosaicRule: JSON.stringify({
            ascending: true,
            mosaicMethod: 'esriMosaicAttribute',
            mosaicOperation: 'MT_FIRST',
            sortField: 'best',
            sortValue: '0',
        }),
    });

    const requestURL = `${LANDSAT_LEVEL_2_SERVICE_URL}/identify?${params.toString()}`;

    const res = await fetch(requestURL, { signal: abortController.signal });

    const data = await res.json();

    if (data.error) {
        throw data.error;
    }

    return data as IdentifyTaskResponse;
};