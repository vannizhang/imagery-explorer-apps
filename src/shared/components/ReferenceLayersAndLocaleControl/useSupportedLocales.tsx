import { appConfig } from '@shared/config';
import React from 'react';

const LOCALE_LABEL: {
    [key: string]: string;
} = {
    en: 'English',
    es: 'Español',
};

export const useSupportedLocales = () => {
    const supportedLocales = React.useMemo(() => {
        const locales = appConfig.supportedLocales || ['en'];

        return locales.map((locale) => {
            return {
                code: locale,
                label: LOCALE_LABEL[locale] || locale,
            };
        });
    }, []);

    return supportedLocales;
};
