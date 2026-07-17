'use client';

import { I18nextProvider } from 'react-i18next';
import { useMemo, useContext, createContext } from 'react';

import { getI18nInstance } from './i18n-instance';
import { DEFAULT_LANG, type Lang } from './config-lang';

// ----------------------------------------------------------------------
// Supplies the route's locale to the tree. The server layout reads `lang` from
// the [lang] route segment and passes it here, so server and client agree by
// construction — no storage read, no detection, no hydration mismatch.
//
// Must sit ABOVE LocalizationProvider and ThemeProvider: both call useLocales().
// ----------------------------------------------------------------------

const LangContext = createContext<Lang>(DEFAULT_LANG);

export function useCurrentLang(): Lang {
    return useContext(LangContext);
}

type Props = {
    lang: Lang;
    children: React.ReactNode;
};

export default function I18nProvider({ lang, children }: Props) {
    const instance = useMemo(() => getI18nInstance(lang), [lang]);

    return (
        <LangContext.Provider value={lang}>
            <I18nextProvider i18n={instance}>{children}</I18nextProvider>
        </LangContext.Provider>
    );
}
