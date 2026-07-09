'use client';

// Ensure the i18next instance is initialised on the client before any
// useTranslation() call (a bare side-effect import in the server layout is not
// guaranteed to run on the client under Next.js App Router).
import './i18n';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { localStorageGetItem } from '@utils/storage-available';

import { useSettingsContext } from '@components/settings';

import { allLangs, defaultLang } from './config-lang';

// ----------------------------------------------------------------------

export function useLocales() {
    const langStorage = localStorageGetItem('i18nextLng');

    const currentLang = allLangs.find((lang) => lang.value === langStorage) || defaultLang;

    return {
        allLangs,
        currentLang,
    };
}

// ----------------------------------------------------------------------

export function useTranslate() {
    const { t, i18n, ready } = useTranslation();

    const settings = useSettingsContext();

    const onChangeLang = useCallback(
        (newlang: string) => {
            i18n.changeLanguage(newlang);
            settings.onChangeDirectionByLang(newlang);
        },
        [i18n, settings]
    );

    return {
        t,
        translate: t,
        i18n,
        ready,
        onChangeLang,
    };
}
