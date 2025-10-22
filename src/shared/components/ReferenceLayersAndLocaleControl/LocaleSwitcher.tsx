import React, { FC, useEffect } from 'react';
import { SupportedLocaleData } from './useSupportedLocales';
import {
    CalciteLabel,
    CalciteRadioButton,
    CalciteRadioButtonGroup,
} from '@esri/calcite-components-react';
import { APP_LANGUAGE } from '@shared/constants/UI';
import { setAppLanguageInUrl } from '@shared/i18n/getAppLanguage';

type Props = {
    data: SupportedLocaleData[];
};

export const LocaleSwitcher: FC<Props> = ({ data }) => {
    const [selectedLocale, setSelectedLocale] =
        React.useState<string>(APP_LANGUAGE);

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div className="absolute top-full w-full bg-custom-background px-4 pt-4 text-custom-light-blue border-t border-custom-light-blue-50 max-h-80 overflow-y-auto">
            <CalciteRadioButtonGroup
                layout="vertical"
                onCalciteRadioButtonGroupChange={(event) => {
                    // console.log(event.target.selectedItem);
                    const selectedItem = event.target
                        .selectedItem as HTMLCalciteRadioButtonElement;
                    const locale = selectedItem?.value || 'en';
                    setSelectedLocale(locale);

                    setAppLanguageInUrl(locale);
                    // const locale = event.target.value as string;
                    // setSelectedLocale(locale);
                }}
            >
                {data.map((locale) => {
                    return (
                        <CalciteLabel key={locale.code} layout="inline">
                            <CalciteRadioButton
                                value={locale.code}
                                checked={selectedLocale === locale.code}
                            ></CalciteRadioButton>
                            {locale.label}
                        </CalciteLabel>
                    );
                })}
            </CalciteRadioButtonGroup>
        </div>
    );
};
