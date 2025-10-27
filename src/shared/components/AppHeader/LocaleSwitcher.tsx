import React, { FC, useEffect, useMemo } from 'react';
import { SupportedLocaleData } from '../../hooks/useSupportedLocales';
import {
    CalciteButton,
    CalciteCheckbox,
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
import { toggleDisableLocaleSuggestion } from '@shared/store/UI/thunks';

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

export const LocaleSwitcher: FC<Props> = ({ data, shouldSuggestLocale }) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [selectedLocale, setSelectedLocale] = React.useState<string>(
        SUGGESTED_LOCALE || APP_LANGUAGE
    );

    const showSuggestedLocaleMessage = useMemo(() => {
        return (
            shouldSuggestLocale &&
            SUGGESTED_LOCALE &&
            SUGGESTED_LOCALE !== APP_LANGUAGE
        );
    }, []);

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div className="absolute top-full left-0 md:left-app-header-size right-0 bg-custom-background px-4 py-4 text-custom-light-blue border-t border-custom-light-blue-50">
            {showSuggestedLocaleMessage ? (
                <div className="mb-4">
                    <p className="text-sm">
                        {t('locale_switcher_suggestion_message', {
                            locale: data.find(
                                (locale) => locale.code === SUGGESTED_LOCALE
                            )?.label,
                        })}
                    </p>
                </div>
            ) : null}

            <CalciteLabel scale="s">
                <span className="text-custom-light-blue text-sm">
                    {t('choose_language')}:
                </span>
                <CalciteSelect
                    onCalciteSelectChange={(event) => {
                        const selected = event.target.selectedOption;
                        setSelectedLocale(selected.value);
                    }}
                    scale="s"
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

            {showSuggestedLocaleMessage && (
                <div className="mt-4 flex items-center">
                    <CalciteCheckbox
                        scale="s"
                        label={t('do_not_show_again')}
                        onCalciteCheckboxChange={(event) => {
                            const checked = event.target.checked;
                            // console.log('disableLocaleSuggestion', checked);
                            // if (checked) {
                            //     localStorage.setItem(
                            //         'disableLocaleSuggestion',
                            //         'true'
                            //     );
                            // } else {
                            //     localStorage.removeItem(
                            //         'disableLocaleSuggestion'
                            //     );
                            // }

                            dispatch(toggleDisableLocaleSuggestion(checked));
                        }}
                    />
                    <span className="text-custom-light-blue text-sm ml-2">
                        {t('do_not_show_again')}
                    </span>
                </div>
            )}
        </div>
    );
};
