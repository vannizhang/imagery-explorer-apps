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

import {
    configureStore,
    // getDefaultMiddleware,
    // DeepPartial,
} from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import rootReducer from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

export type PartialRootState = Partial<RootState>;

const configureAppStore = (preloadedState: PartialRootState = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        // middleware: [...getDefaultMiddleware<RootState>()],
        preloadedState,
    });

    return store;
};

export type AppStore = ReturnType<typeof configureAppStore>;

export type StoreDispatch = ReturnType<typeof configureAppStore>['dispatch'];

export type StoreGetState = ReturnType<typeof configureAppStore>['getState'];

// Use throughout app instead of plain `useDispatch` and `useSelector`
// @see https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useAppDispatch = useDispatch.withTypes<StoreDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default configureAppStore;
