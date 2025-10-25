import React, { FC, useEffect } from 'react';
import { SupportedLocaleData } from '../../hooks/useSupportedLocales';
import {
    CalciteButton,
    CalciteLabel,
    CalciteOption,
    CalciteRadioButton,
    CalciteRadioButtonGroup,
    CalciteSelect,
} from '@esri/calcite-components-react';
import { APP_LANGUAGE } from '@shared/constants/UI';
import { setPreferredLocale } from '@shared/i18n/getAppLanguage';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@shared/store/configureStore';
import { appHeaderDropdownPanelChanged } from '@shared/store/UI/reducer';

type Props = {
    data: SupportedLocaleData[];
};

export const LocaleSwitcher: FC<Props> = ({ data }) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [selectedLocale, setSelectedLocale] =
        React.useState<string>(APP_LANGUAGE);

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
            {/* <CalciteRadioButtonGroup
                layout="vertical"
                onCalciteRadioButtonGroupChange={(event) => {
                    // console.log(event.target.selectedItem);
                    const selectedItem = event.target
                        .selectedItem as HTMLCalciteRadioButtonElement;
                    const locale = selectedItem?.value || 'en';
                    setSelectedLocale(locale);

                    setPreferredLocale(locale);
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
            </CalciteRadioButtonGroup> */}
        </div>
    );
};
