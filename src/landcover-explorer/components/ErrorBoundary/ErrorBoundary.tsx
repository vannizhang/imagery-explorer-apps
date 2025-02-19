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

import React, { PureComponent, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    error: Error | null;
    errorInfo: { componentStack: string } | null;
}

export default class ErrorBoundary extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(
        error: Error,
        errorInfo: { componentStack: string }
    ): void {
        // Catch errors in any components below and re-render with error message
        this.setState({ error, errorInfo });

        // You can also log error messages to an error reporting service here
    }

    render() {
        const { children } = this.props;
        const { error, errorInfo } = this.state;

        if (!error) {
            return children;
        }

        return (
            <div>
                <h1>Something went wrong</h1>
                {error ? <p>{error.toString()}</p> : null}
            </div>
        );
    }
}
