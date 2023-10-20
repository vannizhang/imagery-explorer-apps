import { selectAnimationStatus } from '@shared/store/UI/selectors';
import classNames from 'classnames';
import { map } from 'd3';
import MapView from 'esri/views/MapView';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

type Props = {
    /**
     * if true, this button should be disabled
     */
    disabled?: boolean;
    /**
     * if true, hide the button
     */
    hidden?: boolean;
    /**
     * if true, show loading indicator
     */
    showLoadingIndicator?: boolean;
    /**
     * tooltip text for the button
     */
    tooltip?: string;
    /**
     * emit when user click on
     * @returns void
     */
    onClick: () => void;
};

export const ZoomToExtent: FC<Props> = ({
    disabled,
    hidden,
    showLoadingIndicator,
    tooltip,
    onClick,
}) => {
    return (
        <div
            className={classNames(
                'absolute left-[16px] top-[162px] w-zoom-button-size h-zoom-button-size z-10',
                'bg-custom-background text-custom-light-blue-90 border-t border-custom-light-blue-25',
                'cursor-pointer',
                {
                    hidden,
                    'is-disabled': disabled,
                }
            )}
            title={tooltip}
            onClick={onClick}
        >
            {showLoadingIndicator ? (
                <div className="w-full h-full flex items-center justify-center text-center">
                    <calcite-loader
                        scale="m"
                        inline
                        style={{ marginRight: 0 } as React.CSSProperties}
                    />
                </div>
            ) : (
                <>
                    {/* extent icon */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 32 32"
                        >
                            <path
                                stroke="currentColor"
                                d="M28 4h-6V3h7v7h-1zM4 10H3V3h7v1H4zm6 19H3v-7h1v6h6zm12-1h6v-6h1v7h-7z"
                            />
                            <path fill="none" d="M0 0h32v32H0z" />
                        </svg>
                    </div>

                    {/* search icon */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="currentColor"
                                d="M13.936 13.24L9.708 9.01a4.8 4.8 0 1 0-.69.69l4.228 4.228a.488.488 0 0 0 .69-.69zM6.002 9.8A3.8 3.8 0 1 1 8.69 8.686a3.778 3.778 0 0 1-2.687 1.112z"
                            />
                            <path fill="none" d="M0 0h16v16H0z" />
                        </svg>
                    </div>
                </>
            )}
        </div>
    );
};
