import React, { FC, useEffect, useMemo } from 'react';
import { SupportedLocaleData } from '../../hooks/useSupportedLocales';
import {
    CalciteButton,
    CalciteLabel,
    CalciteOption,
    CalciteRadioButton,
    CalciteRadioButtonGroup,
    CalciteSelect,
} from '@esri/calcite-components-react';
import { APP_LANGUAGE, SUGGESTED_LOCALE } from '@shared/constants/UI';
import { setPreferredLocale } from '@shared/i18n/getAppLanguage';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@shared/store/configureStore';
import { appHeaderDropdownPanelChanged } from '@shared/store/UI/reducer';

type Props = {
    /**
     * data of supported locales
     */
    data: SupportedLocaleData[];
    /**
     * whether it should suggest locale switch.
     * If true, the component can show suggestion message along with the locale switcher.
     * It also show a checkbox to allow the user to disable future locale suggestions.
     */
    shouldSuggestLocale: boolean;
};

export const LocaleSwitcher: FC<Props> = ({ data }) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [selectedLocale, setSelectedLocale] = React.useState<string>(
        SUGGESTED_LOCALE || APP_LANGUAGE
    );

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div className="absolute top-full left-0 md:left-app-header-size right-0 bg-custom-background px-4 py-4 text-custom-light-blue border-t border-custom-light-blue-50">
            <CalciteLabel>
                <span className="text-custom-light-blue">
                    {t('choose_language')}
                </span>
                <CalciteSelect
                    onCalciteSelectChange={(event) => {
                        const selected = event.target.selectedOption;
                        setSelectedLocale(selected.value);
                    }}
                    value={selectedLocale}
                    style={{
                        '--calcite-select-text-color':
                            'var(--custom-light-blue)',
                        '--calcite-select-border-color':
                            'var(--custom-light-blue)',
                    }}
                    // value={selectedLocale}
                >
                    {data.map((locale) => {
                        return (
                            <CalciteOption
                                key={locale.code}
                                value={locale.code}
                                selected={selectedLocale === locale.code}
                            >
                                {locale.label}
                            </CalciteOption>
                        );
                    })}
                </CalciteSelect>
            </CalciteLabel>

            <div
                className="w-full grid grid-cols-2 gap-2"
                style={
                    {
                        '--calcite-button-border-color':
                            'var(--custom-light-blue)',
                        '--calcite-button-text-color':
                            'var(--custom-light-blue)',
                    } as React.CSSProperties
                }
            >
                <CalciteButton
                    appearance="outline"
                    scale="s"
                    disabled={selectedLocale === APP_LANGUAGE}
                    // width='full'
                    onClick={() => {
                        setPreferredLocale(selectedLocale);
                    }}
                >
                    {t('switch_language')}
                </CalciteButton>

                <CalciteButton
                    appearance="outline"
                    scale="s"
                    // width='full'
                    onClick={() => {
                        // setPreferredLocale(selectedLocale);
                        // close the panel
                        dispatch(appHeaderDropdownPanelChanged(null));
                    }}
                >
                    {t('cancel')}
                </CalciteButton>
            </div>
        </div>
    );
};
