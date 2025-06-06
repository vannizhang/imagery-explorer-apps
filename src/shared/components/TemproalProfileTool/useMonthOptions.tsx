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

import React, { useMemo } from 'react';
import { DropdownData } from '@shared/components/Dropdown';

const MONTH_ABBR = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
];

export const useMonthOptions = (selectedMonth: number): DropdownData[] => {
    const monthOptions = useMemo(() => {
        const options = MONTH_ABBR.map((label, index) => {
            const month = index + 1;

            return {
                value: month.toString(),
                label,
                selected: selectedMonth === month,
            };
        });

        return options;
    }, [selectedMonth]);

    return monthOptions;
};
