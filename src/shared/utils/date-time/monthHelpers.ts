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

import { APP_LANGUAGE } from '@shared/constants/UI';
import { t } from 'i18next';

/**
 * Returns the abbreviation of the month for a given month number.
 *
 * @param {number} monthNumber - The number of the month (1 for January, 2 for February, etc.).
 * @returns {string} The abbreviation of the month in lowercase, or an error message if the month number is invalid.
 */
export const getMonthAbbreviation = (monthNumber: number) => {
    const months = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
    ];

    if (monthNumber < 1 && monthNumber > 12) {
        return t('invalid_month'); // Return an error message for invalid month numbers
    }

    const monthAbbr = months[monthNumber - 1];

    return t(monthAbbr);
};

export const MonthData = [
    {
        abbrLabel: 'J',
        days: 31,
        label: 'January',
    },
    {
        abbrLabel: 'F',
        days: 28,
        label: 'February',
    },
    {
        abbrLabel: 'M',
        days: 31,
        label: 'March',
    },
    {
        abbrLabel: 'A',
        days: 30,
        label: 'April',
    },
    {
        abbrLabel: 'M',
        days: 31,
        label: 'May',
    },
    {
        abbrLabel: 'J',
        days: 30,
        label: 'June',
    },
    {
        abbrLabel: 'J',
        days: 31,
        label: 'July',
    },
    {
        abbrLabel: 'A',
        days: 31,
        label: 'August',
    },
    {
        abbrLabel: 'S',
        days: 30,
        label: 'September',
    },
    {
        abbrLabel: 'O',
        days: 31,
        label: 'October',
    },
    {
        abbrLabel: 'N',
        days: 30,
        label: 'November',
    },
    {
        abbrLabel: 'D',
        days: 31,
        label: 'December',
    },
];

const getMonthData = (month: number) => {
    const monthIndex = month - 1;

    return MonthData[monthIndex];
};

/**
 * Get number of days in a month of a given year.
 * @param year Input year.
 * @param month Input month (1 for January, 2 for February, ..., 12 for December).
 * @returns Number of days in the specified month of the given year.
 */
export const getNumberOfDays = (year: number, month: number) => {
    const monthData = getMonthData(month);

    // no need to adjust number of days in the month if it is not Feb
    if (month !== 2) {
        return monthData.days;
    }

    return isLeapYear(year) ? 29 : 28;
};

export const isLeapYear = (year: number) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }

    return false;
};

export const getMonthAbbrName = (month: number) => {
    if (APP_LANGUAGE !== 'en') {
        return getMonthAbbreviation(month);
    }

    const monthData = getMonthData(month);
    return monthData.label.slice(0, 1).toUpperCase();
};
