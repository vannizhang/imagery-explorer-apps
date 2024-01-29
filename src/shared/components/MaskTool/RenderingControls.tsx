import React, { FC } from 'react';
import { Slider } from '../Slider';
import { ColorPicker } from './ColorPicker';
import classNames from 'classnames';
import { Tooltip } from '../Tooltip';

type Props = {
    /**
     * transparence of the Mask Layer
     */
    transparence: number;
    /**
     * if true, uses the pixels as a clipping mask, showing the underlying landsat imagery using the “destination atop” blend mode
     */
    shouldClip: boolean;
    /**
     * color to render the mask layer
     */
    color: number[];
    colorOnChange: (color: number[]) => void;
    shouldClipOnToggle: () => void;
    transparenceOnChange: (val: number) => void;
};

export const RenderingControls: FC<Props> = ({
    transparence,
    shouldClip,
    color,
    colorOnChange,
    shouldClipOnToggle,
    transparenceOnChange,
}: Props) => {
    return (
        <div className="flex items-center calcite-mode-dark select-none">
            <div className="flex items-center">
                <div className="cursor-pointer" onClick={shouldClipOnToggle}>
                    <Tooltip
                        content="Show selected index pixels as a clipping mask, rather than as a solid color."
                        width={200}
                    >
                        {shouldClip ? (
                            <calcite-icon icon="check-square" scale="s" />
                        ) : (
                            <calcite-icon icon="square" scale="s" />
                        )}
                    </Tooltip>
                </div>
                <span className="text-xs ml-2 max-w-[90px] leading-none">
                    Clip to mask
                </span>
            </div>

            <div className={classNames('flex-grow px-4')}>
                <Slider
                    value={transparence}
                    showSliderTooltip={true}
                    tooltipTextFormatter={(val) => {
                        return Math.floor(val * 100).toString() + '%';
                    }}
                    onChange={transparenceOnChange}
                />
            </div>

            <div
                className={classNames({
                    'is-disabled': shouldClip,
                })}
            >
                <ColorPicker color={color} onChange={colorOnChange} />
            </div>
        </div>
    );
};
