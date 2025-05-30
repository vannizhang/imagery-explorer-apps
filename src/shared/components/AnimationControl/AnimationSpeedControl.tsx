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

import React, { FC, useEffect, useMemo, useRef } from 'react';
import { Slider } from '../Slider';
import { useTranslation } from 'react-i18next';

type Props = {
    /**
     * current animation speed in milliseconds
     */
    speed: number;
    /**
     * fires when user selects a new animation speed
     * @param val new animation speed
     * @returns
     */
    onChange: (speed: number) => void;
};

type AnimationSpeedSliderProps = {
    /**
     * current animation speed in millisecond
     */
    speedInMilliseonds: number;
    /**
     * Emits when user selects a new speed
     * @param val
     * @returns
     */
    speedOnChange: (val: number) => void;
};

// /**
//  * Maximum Animation Speed in Milliseconds
//  */
// const MAX_SPEED_IN_MILLISECONDS = 2000;

/**
 * list of animation speed options
 */
const SPEEDS = [2000, 1000, 800, 500, 400, 200, 100, 20, 0];

const useSpeedSliderSteps = () => {
    /**
     * setps that will be used by the animation slider
     *
     * @eample `[0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 1]`
     */
    const steps = useMemo(() => {
        let step = 0;
        const interval = 1 / (SPEEDS.length - 1);

        const output: number[] = [];

        while (step <= 1) {
            output.push(step);
            step += interval;
        }

        return output;
    }, []);

    return steps;
};

/**
 * Calculates the position of a slider thumb based on the given animation speed.
 *
 * @param {number} speed - The animation speed in milliseconds.
 * @returns {number} - The position of the slider thumb, ranging from 0 (slowest) to 1 (fastest).
 */
const getSliderThumbPositionByAnimationSpeed = (speed: number): number => {
    const idx = SPEEDS.indexOf(speed);
    return idx / (SPEEDS.length - 1);
};

/**
 * Find the corresponding animation speed using the slider thumb position.
 * This function takes a slider thumb position and maps it to an animation speed
 * based on predefined speed values. It uses a binary search algorithm to efficiently
 * locate the speed that matches or is closest to the provided position.
 *
 * @param position
 * @returns
 */
const getAnimationSpeedBySliderThumbPosition = (position: number): number => {
    // Initialize the left and right pointers for binary search.
    let left = 0;
    let right = SPEEDS.length - 1;

    while (left < right) {
        const midIdx = Math.floor((right - left) / 2) + left;

        // Calculate the normalized position for the speed at the middle index.
        const pos = midIdx / (SPEEDS.length - 1);

        if (pos == position) {
            return SPEEDS[midIdx];
        }

        if (pos > position) {
            right = midIdx - 1;
        } else {
            left = midIdx + 1;
        }
    }

    return SPEEDS[left];
};

/**
 * A simple slider that will be used to control the speed of Animation
 * @param param0
 * @returns
 */
export const AnimationSpeedSlider: FC<AnimationSpeedSliderProps> = ({
    speedInMilliseonds,
    speedOnChange,
}) => {
    const steps = useSpeedSliderSteps();

    return (
        <Slider
            steps={steps}
            value={getSliderThumbPositionByAnimationSpeed(speedInMilliseonds)} // 0.5 as the mid point of the slider, which is equivelant to 1 second per frame
            onChange={(newThumbPosition) => {
                // console.log(newThumbPosition, getAnimationSpeedBySliderThumbPosition(newThumbPosition));

                const newAnimationSpeed =
                    getAnimationSpeedBySliderThumbPosition(newThumbPosition);

                speedOnChange(newAnimationSpeed);
            }}
        />
    );
};

/**
 * A slider component to control the speed of animation
 * @param param0
 * @returns
 */
export const AnimationSpeedControl: FC<Props> = ({ speed, onChange }) => {
    const { t } = useTranslation();

    return (
        <div
            // id="cloud-filter-container"
            className="flex-grow pl-1 pr-2 pt-2"
        >
            {/* <Slider
                steps={steps}
                value={getSliderThumbPositionByAnimationSpeed(speed)} // 0.5 as the mid point of the slider, which is equivelant to 1 second per frame
                onChange={(newThumbPosition) => {
                    // console.log(newThumbPosition, getAnimationSpeedBySliderThumbPosition(newThumbPosition));

                    const newAnimationSpeed =
                        getAnimationSpeedBySliderThumbPosition(
                            newThumbPosition
                        );

                    onChange(newAnimationSpeed);
                }}
            /> */}

            <AnimationSpeedSlider
                speedInMilliseonds={speed}
                speedOnChange={onChange}
            />

            <div className="text-xs text-center mt-1">
                <span>{t('speed')}</span>
            </div>
        </div>
    );
};
