import {
    MaskMethodList,
    MaskPixelRangeSlider,
    MaskRenderingControls,
} from '@shared/components/MaskTool';
import {
    maskLayerOpacityChanged,
    maskMethodChanged,
    shouldClipMaskLayerToggled,
} from '@shared/store/Analysis/reducer';
import {
    selectMaskLayerOpcity,
    selectMaskMethod,
    selectMaskOptions,
    selectShouldClipMaskLayer,
} from '@shared/store/Analysis/selectors';
import { updateSelectedRange } from '@shared/store/Analysis/thunks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const MaskToolContainer = () => {
    const dispatch = useDispatch();

    const selectedMethod = useSelector(selectMaskMethod);

    const maskOptions = useSelector(selectMaskOptions);

    const opacity = useSelector(selectMaskLayerOpcity);

    const shouldClip = useSelector(selectShouldClipMaskLayer);

    return (
        <div className="w-[280px] h-full mx-2">
            <MaskMethodList
                selectedMethod={selectedMethod}
                onChange={(val) => {
                    dispatch(maskMethodChanged(val));
                }}
            />

            <MaskPixelRangeSlider
                values={maskOptions.selectedRange}
                valOnChange={(index, value) => {
                    dispatch(updateSelectedRange(index, value));
                }}
            />

            <MaskRenderingControls
                selectedOpacity={opacity}
                shouldClip={shouldClip}
                shouldClipOnToggle={() => {
                    dispatch(shouldClipMaskLayerToggled());
                }}
                opacityOnChange={(val) => {
                    dispatch(maskLayerOpacityChanged(val));
                }}
            />
        </div>
    );
};
