'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button, { ButtonProps } from '@mui/material/Button';

import { useCurrentLang } from '@base/locales/i18n-provider';
import { LANGS, isLang, type Lang } from '@base/locales/langs';

// ----------------------------------------------------------------------
// Switching language is a NAVIGATION to the other locale's URL, not a client-side
// i18next.changeLanguage(). That's the whole point: a JS-only toggle is invisible
// to crawlers, so the English pages would never be indexed.
//
// Shows the language you'd switch TO. Text rather than a flag — a US flag for
// "English" on a Croatian site is the classic flags-for-languages antipattern.
// ----------------------------------------------------------------------

/** '/hr/about-us/' + 'en' → '/en/about-us/' */
export function swapLocale(pathname: string, target: Lang): string {
    const segments = pathname.split('/');

    // Under [lang], segment 1 is always a locale. The else-branch only happens
    // outside the locale tree (e.g. the global 404).
    if (isLang(segments[1])) {
        segments[1] = target;
    } else {
        return `/${target}/`;
    }

    const swapped = segments.join('/');

    return swapped.endsWith('/') ? swapped : `${swapped}/`;
}

// ----------------------------------------------------------------------

export default function LocaleSwitch(props: ButtonProps) {
    const lang = useCurrentLang();
    const pathname = usePathname();

    const target = (LANGS.find((item) => item !== lang) ?? lang) as Lang;

    return (
        <Button
            component={Link}
            // Deliberately plain next/link: RouterLink would try to prefix an
            // already-prefixed href. This is the one link that must bypass that.
            href={swapLocale(pathname, target)}
            hrefLang={target}
            lang={target}
            color="inherit"
            size="small"
            sx={{ minWidth: 0, px: 1, fontWeight: 700, letterSpacing: '0.06em' }}
            {...props}
        >
            {target.toUpperCase()}
        </Button>
    );
}
