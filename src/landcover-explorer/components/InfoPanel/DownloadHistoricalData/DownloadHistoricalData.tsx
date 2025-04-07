import { APP_NAME } from '@shared/config';
import { HistoricalLandCoverData } from '@shared/services/sentinel-2-10m-landcover/computeHistograms';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
    data: HistoricalLandCoverData[];
};

export const DownloadHistoricalData: FC<Props> = ({ data }) => {
    const { t } = useTranslation();

    const handleDownload = () => {
        // Implement download functionality here
        console.log('Download button clicked', data);
    };

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div
            style={
                {
                    '--calcite-button-border-color': 'var(--custom-light-blue)',
                    '--calcite-button-text-color': 'var(--custom-light-blue)',
                } as React.CSSProperties
            }
        >
            <div className="mb-2">{t('download')}</div>
            <calcite-button
                icon-start="download"
                appearance="outline"
                Kind="neutral"
                onClick={handleDownload}
            >
                {t('donwload_historical_data', {
                    ns: APP_NAME,
                })}
            </calcite-button>
        </div>
    );
};
