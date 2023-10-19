import { FIELD_NAMES } from './config';
import { LANDSAT_LEVEL_2_SERVICE_URL } from './config';
import { IFeature } from '@esri/arcgis-rest-feature-service';
// import { format } from 'date-fns';
import { parseLandsatInfo } from './helpers';
import { getFormatedDateString } from '@shared/utils/date-time/formatDateString';
import { LandsatScene } from '@typing/imagery-service';

type GetLandsatScenesParams = {
    /**
     * longitude and latitude (e.g. [-105, 40])
     */
    mapPoint: number[];
    /**
     * acquisition year
     */
    acquisitionYear?: number;
    /**
     * acquisition month
     */
    acquisitionMonth?: number;
    /**
     * acquisition date in formate of `YYYY-MM-DD` (e.g. `2023-05-26`)
     */
    formattedAcquisitionDate?: string;
    /**
     * array of landsat missions to be excluded from the query
     */
    missionsToBeExcluded?: number[];
    /**
     * abortController that will be used to cancel the unfinished requests
     */
    abortController: AbortController;
};

// let controller:AbortController = null;

const {
    OBJECTID,
    ACQUISITION_DATE,
    CLOUD_COVER,
    CATEGORY,
    NAME,
    BEST,
    SENSORNAME,
    WRS_PATH,
    WRS_ROW,
    LANDSAT_PRODUCT_ID,
    MONTH,
    SUNAZIMUTH,
    SUNELEVATION,
    DATASET_ID,
} = FIELD_NAMES;

/**
 * Formats the features from Landsat-level-2 service and returns an array of LandsatScene objects.
 * @param features - An array of IFeature objects from Landsat-level-2 service.
 * @returns An array of LandsatScene objects containing the acquisition date, formatted acquisition date, name, cloud cover, and best attributes.
 */
export const getFormattedLandsatScenes = (
    features: IFeature[]
): LandsatScene[] => {
    return features.map((feature) => {
        const { attributes } = feature;

        const acquisitionDate = attributes[ACQUISITION_DATE];

        // const productId = attributes[LANDSAT_PRODUCT_ID];

        const name = attributes[NAME];

        /**
         * formatted aquisition date should be like `2023-05-01`
         */
        const formattedAcquisitionDate = getFormatedDateString({
            date: +acquisitionDate,
        }); //format(acquisitionDate, 'yyyy-MM-dd');

        const [acquisitionYear, acquisitionMonth] = formattedAcquisitionDate
            .split('-')
            .map((d) => +d);

        const {
            // collectionCategory,
            // collectionNumber,
            correctionLevel,
            processingDate,
            sensor,
        } = parseLandsatInfo(name);

        const landsatScene: LandsatScene = {
            objectId: attributes[OBJECTID],
            // productId,
            acquisitionDate,
            formattedAcquisitionDate,
            name: attributes[NAME],
            cloudCover: attributes[CLOUD_COVER],
            formattedCloudCover: attributes[CLOUD_COVER]
                ? Math.ceil(attributes[CLOUD_COVER] * 100)
                : 0,
            // best: attributes[BEST],
            // isCloudy: attributes[CLOUD_COVER] > CLOUDY_THRESHOLD,
            satellite: `Landsat ${parseInt(name.slice(2, 4))}`,
            row: attributes[WRS_ROW],
            path: attributes[WRS_PATH],
            // category: attributes[CATEGORY],
            // collectionCategory,
            // collectionNumber,
            correctionLevel,
            processingDate,
            sensor,
            acquisitionYear,
            acquisitionMonth,
            sunAzimuth: attributes[SUNAZIMUTH],
            sunElevation: attributes[SUNELEVATION],
        };

        return landsatScene;
    });
};

/**
 * Query the Landsat-level-2 imagery service to find a list of scenes for available Landsat data that
 * intersect with the input map point or map extent and were acquired during the input year and month.
 *
 * @param {number} params.year - The year of the desired acquisition dates.
 * @param {Object} params.mapPoint - The point geometry to query.
 *
 * @returns {Promise} A promise that resolves to an array of LandsatAcquisitionDate objects.
 *
 */
export const getLandsatScenes = async ({
    mapPoint,
    acquisitionYear,
    acquisitionMonth,
    formattedAcquisitionDate,
    missionsToBeExcluded,
    abortController,
}: GetLandsatScenesParams): Promise<LandsatScene[]> => {
    // if (!acquisitionYear && !formattedAcquisitionDate) {
    //     throw new Error(
    //         `acquisitionYear or acquisitionDate is required to query Landsat Scenes`
    //     );
    // }

    const whereClauses = [`(${CATEGORY} = 1)`];

    if (acquisitionYear || formattedAcquisitionDate) {
        // if acquisitionDate is provided, only query scenes that are acquired on this date,
        // otherwise, query scenes that were acquired within the acquisitionYear year
        whereClauses.push(
            formattedAcquisitionDate
                ? `(${ACQUISITION_DATE} BETWEEN timestamp '${formattedAcquisitionDate} 00:00:00' AND timestamp '${formattedAcquisitionDate} 23:59:59')`
                : `(${ACQUISITION_DATE} BETWEEN timestamp '${acquisitionYear}-01-01 00:00:00' AND timestamp '${acquisitionYear}-12-31 23:59:59')`
        );
    }

    if (acquisitionMonth) {
        whereClauses.push(`(${MONTH} = ${acquisitionMonth})`);
    }

    if (missionsToBeExcluded && missionsToBeExcluded.length) {
        const missionNames = missionsToBeExcluded.map(
            (mission) => `'Landsat${mission}'`
        );
        whereClauses.push(
            `(${DATASET_ID} NOT IN (${missionNames.join(', ')}))`
        );
    }

    const [longitude, latitude] = mapPoint;

    const geometry = JSON.stringify({
        spatialReference: {
            wkid: 4326,
        },
        x: longitude,
        y: latitude,
    });

    const params = new URLSearchParams({
        f: 'json',
        spatialRel: 'esriSpatialRelIntersects',
        // geometryType: 'esriGeometryEnvelope',
        geometryType: 'esriGeometryPoint',
        // inSR: '102100',
        outFields: [
            ACQUISITION_DATE,
            CLOUD_COVER,
            NAME,
            BEST,
            SENSORNAME,
            WRS_PATH,
            WRS_ROW,
            CATEGORY,
            LANDSAT_PRODUCT_ID,
            SUNAZIMUTH,
            SUNELEVATION,
        ].join(','),
        orderByFields: ACQUISITION_DATE,
        resultOffset: '0',
        returnGeometry: 'false',
        resultRecordCount: '1000',
        geometry,
        where: whereClauses.join(` AND `),
    });

    // if(controller){
    //     controller.abort();
    // }

    // controller = new AbortController()

    const res = await fetch(
        `${LANDSAT_LEVEL_2_SERVICE_URL}/query?${params.toString()}`,
        {
            signal: abortController.signal,
        }
    );

    if (!res.ok) {
        throw new Error('failed to query Landsat-2 service');
    }

    const data = await res.json();

    if (data.error) {
        throw data.error;
    }

    return getFormattedLandsatScenes(data?.features || []);
};

export const getLandsatFeatureByObjectId = async (
    objectId: number,
    abortController?: AbortController
) => {
    const queryParams = new URLSearchParams({
        f: 'json',
        returnGeometry: 'true',
        objectIds: objectId.toString(),
    });

    const res = await fetch(
        `${LANDSAT_LEVEL_2_SERVICE_URL}/query?${queryParams.toString()}`,
        {
            // signal: abortController.signal,
        }
    );

    if (!res.ok) {
        throw new Error('failed to query Landsat-2 service');
    }

    const data = await res.json();

    if (data.error) {
        throw data.error;
    }

    if (!data?.features || !data.features.length) {
        return null;
    }

    return data?.features[0] as IFeature;
};
