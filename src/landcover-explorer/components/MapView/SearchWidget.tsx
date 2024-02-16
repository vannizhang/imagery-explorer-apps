/* Copyright 2024 Esri
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

import React, { useRef } from 'react';
import IMapView from '@arcgis/core/views/MapView';
import IExtent from '@arcgis/core/geometry/Extent';
import IGraphic from '@arcgis/core/Graphic';
import Search from '@arcgis/core/widgets/Search';
import classNames from 'classnames';

type SearchResult = {
    extent: IExtent;
    feature: IGraphic;
    name: string;
    target: string;
};

type Props = {
    // containerId?: string;
    mapView?: IMapView;
    hide?: boolean;
    searchCompletedHandler?: (result: SearchResult) => void;
};

export const SEARCH_WIDGET_WIDTH = 240;

const SearchWidget: React.FC<Props> = ({
    // containerId,
    mapView,
    hide,
    searchCompletedHandler,
}: Props) => {
    const containerRef = useRef<HTMLDivElement>();

    const init = async () => {
        try {
            const searchWidget = new Search({
                view: mapView,
                resultGraphicEnabled: false,
                popupEnabled: false,
                container: containerRef.current,
            });

            // mapView.ui.add(searchWidget, 'top-right');

            if (searchCompletedHandler) {
                searchWidget.on('search-complete', (evt) => {
                    if (
                        searchWidget.results[0] &&
                        searchWidget?.results[0]?.results[0]
                    ) {
                        const searchResult: SearchResult =
                            searchWidget.results[0].results[0];
                        // console.log(searchResultGeom);
                        searchCompletedHandler(searchResult);
                    }
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    React.useEffect(() => {
        if (mapView) {
            init();
        }
    }, [mapView]);

    return (
        <div
            className={classNames(
                'absolute top-search-widget-top-position-mobile md:top-search-widget-top-position',
                {
                    'opacity-0': hide,
                }
            )}
            ref={containerRef}
            style={{
                // top: 50,
                right: 15,
                width: SEARCH_WIDGET_WIDTH,
            }}
        ></div>
    );
};

export default SearchWidget;
