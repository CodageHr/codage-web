'use client';

import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { localStorageGetItem } from 'src/utils/storage-available';

import { defaultLang } from './config-lang';
import translationEn from './langs/en.json';
import translationHr from './langs/hr.json';

// ----------------------------------------------------------------------

const lng = localStorageGetItem('i18nextLng', defaultLang.value);

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            hr: { translations: translationHr },
            en: { translations: translationEn },
        },
        lng,
        fallbackLng: 'en',
        debug: false,
        ns: ['translations'],
        defaultNS: 'translations',
        // Resources are bundled inline, so initialise synchronously. This makes
        // t() resolve on the very first render (SSR + client), which prevents raw
        // translation keys from flashing and avoids React hydration mismatches.
        initImmediate: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    } as InitOptions);

export default i18n;
