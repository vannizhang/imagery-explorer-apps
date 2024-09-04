import { LineChartDataItem } from '@vannizhang/react-d3-charts/dist/LineChart/types';
import { LandCoverType, SpectralProfileDataByLandCoverType } from './config';

const FILL_COLOR_BY_LAND_COVER_TYPE: Record<LandCoverType, string> = {
    Cloud: '#888888',
    'Clear Water': '#0079F2',
    'Turbid Water': '#76B5E2',
    'Snow and Ice': '#FFFFFF',
    Sand: '#EDC692',
    'Bare Soil': '#EE9720',
    'Paved Surface': '#EB7EE0',
    Trees: '#0AC5C0',
    'Healthy Vegetation': '#1BE43E',
    'Dry Vegetation': '#CAD728',
};

/**
 * Get fill color that will be used to render the stroke line by land cover type.
 * @param {LandCoverType} landCoverType user selected land cover type
 * @returns hex color string
 */
export const getFillColorByLandCoverType = (
    landCoverType: LandCoverType
): string => {
    return (
        FILL_COLOR_BY_LAND_COVER_TYPE[landCoverType] ||
        'var(--custom-light-blue-90)'
    );
};

/**
 * Get normalized band value to ensure it fits into the range of lower and upper end
 * @param value band value to normalize
 * @param lowerEnd min value of the value range
 * @param upperEnd max value of the value range
 * @returns {number} normalized value
 */
export const normalizeBandValue = (
    value: number,
    lowerEnd: number,
    upperEnd: number
): number => {
    // band value should never go above upperEnd
    value = Math.min(value, upperEnd);
    // band value should never go below lowerEnd
    value = Math.max(value, lowerEnd);
    return value;
};

/**
 * Given an array of band values from a user-selected location and a spectral data lookup table,
 * find the land cover type that is most similar to the provided band values.
 *
 * The function compares the band values against typical spectral profiles for different land cover types.
 * It uses the sum of squared differences between the band values and each spectral profile to determine similarity.
 * The land cover type with the smallest sum of squared differences is returned as the most similar match.
 *
 * @param {number[]} bandValues - Array of band values from the user-selected location.
 * @param {SpectralProfileDataByLandCoverType} spectralProfileData - Lookup table providing typical spectral profiles for different land cover types.
 * @returns {LandCoverType} The land cover type that has the spectral profile most similar to the input band values.
 */
export const findMostSimilarLandCoverType = (
    bandValues: number[],
    spectralProfileData: SpectralProfileDataByLandCoverType
): LandCoverType => {
    // let minSumOfDifferences = Infinity;
    let minSumOfSquaredDifferences = Infinity;
    let output: LandCoverType = null;

    for (const [landCoverType, value] of Object.entries(spectralProfileData)) {
        // let sumOfDiff = 0;
        let sumOfSquaredDiff = 0;

        const len = Math.min(bandValues.length, value.length);

        for (let i = 0; i < len; i++) {
            const diff = Math.abs(bandValues[i] - value[i]);
            // sumOfDiff += diff;

            // By squaring the differences, larger deviations from the expected values will have a
            // more significant impact on the total difference.
            // Therefore, it might provide a more accurate measure of similarity between spectral profiles.
            sumOfSquaredDiff += diff * diff;
        }

        if (sumOfSquaredDiff < minSumOfSquaredDifferences) {
            minSumOfSquaredDifferences = sumOfSquaredDiff;
            output = landCoverType as LandCoverType;
        }
    }

    return output;
};

/**
 * Converts an array of band values to an array of LineChartDataItem objects.
 *
 * This function processes an array of numeric band values, selecting up to a specified maximum number of bands.
 * It normalizes the values to ensure they fall within the range of 0 to 1, and then maps each band value to
 * a LineChartDataItem object with `x` and `y` coordinates, where `x` represents the band index and `y` the normalized value.
 *
 * @param {number[]} bandValues - An array of numeric values representing imagery band values.
 * @param {number} length - The number of band values to include in the output array.
 * @returns {LineChartDataItem[]} An array of LineChartDataItem objects with normalized x and y values.
 */
export const formatBandValuesAsLineChartDataItems = (
    bandValues: number[],
    length?: number
) => {
    if (!bandValues || !bandValues.length) {
        return [];
    }

    return bandValues.slice(0, length).map((val, index) => {
        return {
            x: index,
            y: normalizeBandValue(val, 0, 1),
        } as LineChartDataItem;
    });
};
