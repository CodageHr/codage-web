'use client';

import { useTranslation } from 'react-i18next';

import { allLangs, defaultLang } from './config-lang';
import { useCurrentLang } from './i18n-provider';

// ----------------------------------------------------------------------

export function useLocales() {
    const lang = useCurrentLang();

    const currentLang = allLangs.find((item) => item.value === lang) || defaultLang;

    return {
        allLangs,
        currentLang,
    };
}

// ----------------------------------------------------------------------
// The active language comes from the [lang] route segment via I18nProvider, so
// there is no onChangeLang(): switching language is a navigation to the other
// locale's URL (see src/components/locale-switch). That's what makes the English
// version crawlable — a client-side language toggle is invisible to search engines.

export function useTranslate() {
    const { t, i18n, ready } = useTranslation();

    return {
        t,
        translate: t,
        i18n,
        ready,
    };
}
