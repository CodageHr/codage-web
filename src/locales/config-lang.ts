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

import { setDefaultOptions } from 'date-fns';

import {
    enUS as enUSDate,
} from '@mui/x-date-pickers/locales';
import {
    enUS as enUSDataGrid,
} from '@mui/x-data-grid/locales';

import hrDataGrid from '@theme/locale/hr-data-grid';
import hrHrDate from '@theme/locale/hr-x-date-pickers';


// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
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

setDefaultOptions({
    locale: defaultLang.adapterLocale
});

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
// https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0
