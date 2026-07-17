'use client';

import merge from 'lodash/merge';
// date fns
import {
    hr as hrHRAdapter,
    enUS as enUSAdapter
} from 'date-fns/locale';

// core (MUI)
import {
    hrHR as hrHRCore,
    enUS as enUSCore
} from '@mui/material/locale';
// data grid (MUI)

import {
    enUS as enUSDate,
} from '@mui/x-date-pickers/locales';
import {
    enUS as enUSDataGrid,
} from '@mui/x-data-grid/locales';

import hrDataGrid from '@theme/locale/hr-data-grid';
import hrHrDate from '@theme/locale/hr-x-date-pickers';


// ----------------------------------------------------------------------

/** The locales this site is built for. Drives the [lang] route segment. */
export type Lang = 'hr' | 'en';

export const LANGS: readonly Lang[] = ['hr', 'en'] as const;

export const DEFAULT_LANG: Lang = 'hr';

export const isLang = (value: unknown): value is Lang =>
    typeof value === 'string' && (LANGS as readonly string[]).includes(value);

// ----------------------------------------------------------------------

export const allLangs = [
    {
        label: 'Hrvatski',
        value: 'hr',
        systemValue: merge(hrHrDate, hrDataGrid, hrHRCore),
        adapterLocale: hrHRAdapter,
        icon: 'flagpack:hr',
        numberFormat: {
            code: 'hr-HR',
            currency: 'EUR',
        },
    },
    {
        label: 'English',
        value: 'en',
        systemValue: merge(enUSDate, enUSDataGrid, enUSCore),
        adapterLocale: enUSAdapter,
        icon: 'flagpack:us',
        numberFormat: {
            code: 'en-US',
            currency: '$',
        },
    }

];

export const defaultLang = allLangs[0]; // Croatian

// NOTE: no date-fns setDefaultOptions() here on purpose — it mutates a
// process-wide global, which would poison the other locale's render during a
// two-locale build. The per-locale date adapter is supplied by
// LocalizationProvider instead.

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
// https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0
