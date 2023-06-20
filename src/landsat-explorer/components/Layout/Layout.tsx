import React from 'react';
import BottomPanel from '@shared/components/BottomPanel/BottomPanel';
import { RasterFunctionSelector } from '../RasterFunctionSelector';
import { Calendar } from '../Calendar';
import { AppHeader } from '@shared/components/AppHeader';
import { ModeSelector } from '../ModeSelector';
import { SwipeLayerSelector } from '../SwipeLayerSelector';
import { SceneInfo } from '../SceneInfo';
import { useSelector } from 'react-redux';
import { selectAppMode } from '@shared/store/Landsat/selectors';
import { AnimationControl } from '../AnimationControl';
import { MaskTool } from '../MaskTool';
import { selectActiveAnalysisTool } from '@shared/store/Analysis/selectors';
import { AnalysisToolSelector } from '../AnalysisToolSelector';

const Layout = () => {
    const mode = useSelector(selectAppMode);

    const analysisTool = useSelector(selectActiveAnalysisTool);

    const dynamicModeOn = mode === 'dynamic';

    return (
        <>
            <AppHeader title="Landsat Explorer" />
            <BottomPanel>
                <div className="flex flex-shrink-0">
                    <ModeSelector />

                    {(mode === 'swipe' ||
                        mode === 'animate' ||
                        mode === 'analysis') && (
                        <div className="container-of-secondary-controls">
                            <SwipeLayerSelector />
                            <AnimationControl />
                            <AnalysisToolSelector />
                        </div>
                    )}
                </div>

                <div className="flex flex-grow justify-center">
                    {dynamicModeOn && <RasterFunctionSelector />}

                    {dynamicModeOn === false && (
                        <>
                            <div className="flex shrink-0">
                                <Calendar />
                            </div>

                            <div className="flex ml-2 3xl:ml-12">
                                <RasterFunctionSelector />
                                <SceneInfo />
                            </div>

                            <div className="ml-2 3xl:ml-12">
                                {mode === 'analysis' &&
                                    analysisTool === 'mask' && <MaskTool />}
                            </div>
                        </>
                    )}
                </div>
            </BottomPanel>
        </>
    );
};

export default Layout;
