import { alpha } from '@mui/material/styles';

import { sand, brand } from '../tokens';
import { grey, primary } from '../palette';

// ----------------------------------------------------------------------

type PresetType = 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';

// On dark surfaces the brand primary becomes the lighter terracotta accent
// (#E07E58) with ink text (#201913), per HANDOFF §1 dark-mode mapping.
const primaryDark = {
    lighter: brand[200],
    light: brand[300],
    main: brand.dark, // #E07E58
    dark: brand[400], // #DF8663 (hover)
    darker: brand[600],
    contrastText: sand[900], // #201913
};

export function createPresets(preset: PresetType, mode: 'light' | 'dark' = 'light') {
    const primaryColor = getPrimary(preset, mode);

    const theme = {
        palette: {
            primary: primaryColor,
        },
        customShadows: {
            primary: `0 8px 16px 0 ${alpha(`${primaryColor?.main}`, 0.24)}`,
        },
    };

    return {
        ...theme,
    };
}

// ----------------------------------------------------------------------

const cyan = {
    lighter: '#CCF4FE',
    light: '#68CDF9',
    main: '#078DEE',
    dark: '#0351AB',
    darker: '#012972',
    contrastText: '#FFFFFF',
};

const purple = {
    lighter: '#EBD6FD',
    light: '#B985F4',
    main: '#7635dc',
    dark: '#431A9E',
    darker: '#200A69',
    contrastText: '#FFFFFF',
};

const blue = {
    lighter: '#D1E9FC',
    light: '#76B0F1',
    main: '#2065D1',
    dark: '#103996',
    darker: '#061B64',
    contrastText: '#FFFFFF',
};

const orange = {
    lighter: '#FEF4D4',
    light: '#FED680',
    main: '#fda92d',
    dark: '#B66816',
    darker: '#793908',
    contrastText: grey[800],
};

const red = {
    lighter: '#FFE3D5',
    light: '#FFC1AC',
    main: '#FF3030',
    dark: '#B71833',
    darker: '#7A0930',
    contrastText: '#FFFFFF',
};

export const presetOptions = [
    { name: 'default', value: primary.main },
    { name: 'cyan', value: cyan.main },
    { name: 'purple', value: purple.main },
    { name: 'blue', value: blue.main },
    { name: 'orange', value: orange.main },
    { name: 'red', value: red.main },
];

export function getPrimary(preset: PresetType, mode: 'light' | 'dark' = 'light') {
    return {
        default: mode === 'dark' ? primaryDark : primary,
        cyan,
        purple,
        blue,
        orange,
        red,
    }[preset];
}
