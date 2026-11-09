import { createInstance, type InitOptions, type i18n as I18nType } from 'i18next';

import { type Lang } from './langs';
import translationEn from './langs/en.json';
import translationHr from './langs/hr.json';

// ----------------------------------------------------------------------
// One i18next instance PER LOCALE, created once and never mutated
// (changeLanguage is never called).
//
// The i18next package default export is a process-wide singleton. Mutating it
// would leak the language across routes when /hr/* and /en/* are prerendered in
// the same `next build` - rendering is interleaved, so a language set for one
// page would bleed into another mid-render.
//
// initReactI18next is deliberately NOT used: it calls setI18n(), which writes
// that same global. Instead the instance reaches components through
// <I18nextProvider>, which react-i18next reads *before* the global. A component
// accidentally rendered outside the provider therefore warns loudly instead of
// silently picking up the wrong language.
// ----------------------------------------------------------------------

const resources = {
    hr: { translations: translationHr },
    en: { translations: translationEn },
};

const instances = new Map<Lang, I18nType>();

export function getI18nInstance(lang: Lang): I18nType {
    const cached = instances.get(lang);

    if (cached) {
        return cached;
    }

    const instance = createInstance();

    instance.init({
        resources,
        lng: lang,
        // A missing EN key renders Croatian instead of a raw key name.
        fallbackLng: 'hr',
        debug: false,
        ns: ['translations'],
        defaultNS: 'translations',
        // Resources are bundled inline, so initialise synchronously. t() then
        // resolves on the very first render (server + client), which prevents raw
        // keys from flashing and keeps SSR/hydration parity.
        initImmediate: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    } as InitOptions);

    instances.set(lang, instance);

    return instance;
}
