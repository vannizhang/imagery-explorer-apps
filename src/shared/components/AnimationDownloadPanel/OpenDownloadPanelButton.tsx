import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showDownloadAnimationPanelChanged } from '@shared/store/UI/reducer';

export const OpenDownloadPanelButton = () => {
    const dispatch = useDispatch();

    return (
        <div
            className={classNames('absolute top-1 right-16', 'cursor-pointer')}
            onClick={() => {
                dispatch(showDownloadAnimationPanelChanged(true));
            }}
        >
            {/* download-to icon: https://esri.github.io/calcite-ui-icons/#download-to */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                height={64}
                width={64}
            >
                <path
                    fill="currentColor"
                    d="M25 27H8v-1h17zm-3.646-9.646l-.707-.707L17 20.293V5h-1v15.293l-3.646-3.646-.707.707 4.853 4.853z"
                />
                <path fill="none" d="M0 0h32v32H0z" />
            </svg>
        </div>
    );
};
