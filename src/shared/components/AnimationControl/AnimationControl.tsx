import React, { FC } from 'react';
import { AnimationStatus } from '../../store/UI/reducer';
import classNames from 'classnames';
import { AnimationSpeedControl } from './AnimationSpeedControl';

const PlayButton = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24"
        width="24"
    >
        <path
            fill="currentColor"
            d="M9 6.886v10.228L16.5 12zm1 1.893L14.725 12 10 15.221zM1 3v18h22V3zm21 17H2V4h20z"
        />
        <path fill="none" d="M0 0h24v24H0z" />
    </svg>
);

const PauseButton = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24"
        width="24"
    >
        <path
            fill="currentColor"
            d="M4 22h6V2H4zM5 3h4v18H5zm9 19h6V2h-6zm1-19h4v18h-4z"
        />
        <path fill="none" d="M0 0h24v24H0z" />
    </svg>
);

const CloseButton = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24"
        width="24"
    >
        <path
            fill="currentColor"
            d="M17.45 8.257L13.207 12.5l4.243 4.243-.707.707-4.243-4.243-4.243 4.243-.707-.707 4.243-4.243L7.55 8.257l.707-.707 4.243 4.243 4.243-4.243zM22.8 12.5A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"
        />
        <path fill="none" d="M0 0h24v24H0z" />
    </svg>
);

type Props = {
    status: AnimationStatus;
    animationSpeed: number;
    /**
     * if ture, the Animation Status Control Button (Play/Pause/Close) should be disabled.
     * This happenes when there is no frames in the Animation Layer
     */
    shouldDisablePlayPauseButton?: boolean;
    /**
     * if ture, Add a Frame Button should be disabled.
     * This happenes when number of frames hits the upper limit
     */
    shouldDisableAddFrameButton?: boolean;
    /**
     * fires when user clicks on "Add A Scene" button
     * @returns void
     */
    addButtonOnClick: () => void;
    /**
     * fires when user makes change to Animation Status
     * @param newStatus
     * @returns void;
     */
    statusOnChange: (newStatus?: AnimationStatus) => void;
    /**
     * fires when user makes change to Animation Speed
     * @param newSpeed speed in milliseconds
     * @returns
     */
    speedOnChange: (newSpeed?: number) => void;
};

export const AnimationControl: FC<Props> = ({
    status,
    animationSpeed,
    shouldDisablePlayPauseButton,
    shouldDisableAddFrameButton,
    addButtonOnClick,
    statusOnChange,
    speedOnChange,
}: Props) => {
    const shouldShowSpeedControl = status === 'playing' || status === 'pausing';

    return (
        <div className={classNames('flex items-center')}>
            <div className="flex items-center flex-grow">
                {status === null && (
                    <div
                        className={classNames(
                            'w-full cursor-pointer text-center flex items-center',
                            {
                                'is-disabled': shouldDisableAddFrameButton,
                            }
                        )}
                        onClick={addButtonOnClick}
                    >
                        <calcite-icon icon="plus" scale="s" />
                        <span
                            className=" text-custom-light-blue uppercase ml-1"
                            style={{
                                fontSize: `.7rem`,
                            }}
                        >
                            Add A Scene
                        </span>
                    </div>
                )}

                {shouldShowSpeedControl && (
                    <AnimationSpeedControl
                        speed={animationSpeed}
                        onChange={(speed) => {
                            speedOnChange(speed);
                        }}
                    />
                )}
            </div>

            <div
                className={classNames(
                    'flex cursor-pointer justify-center items-center',
                    {
                        hidden: shouldDisablePlayPauseButton,
                    }
                )}
            >
                {!status && (
                    <div onClick={statusOnChange.bind(null, 'loading')}>
                        {PlayButton}
                    </div>
                )}
                {status === 'loading' && (
                    <div>
                        <calcite-loader
                            scale="m"
                            active
                            inline
                        ></calcite-loader>
                    </div>
                )}
                {status === 'playing' && (
                    <div onClick={statusOnChange.bind(null, 'pausing')}>
                        {PauseButton}
                    </div>
                )}
                {status === 'pausing' && (
                    <div onClick={statusOnChange.bind(null, 'playing')}>
                        {PlayButton}
                    </div>
                )}
                {status && (
                    <div onClick={statusOnChange.bind(null, null)}>
                        {CloseButton}
                    </div>
                )}
            </div>
        </div>
    );
};
