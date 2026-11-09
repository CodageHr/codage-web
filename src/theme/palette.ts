import { alpha } from '@mui/material/styles';

import { ink, sand, brand, cream, semantic, darkMode } from './tokens';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles' {
  interface TypeBackground {
    neutral: string;
    dropdown: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

// `grey` is remapped onto the warm sand ramp so template components that still
// reference theme.palette.grey inherit the brand's warm neutrals.
export const grey = {
    0: sand[0],
    100: sand[50],
    200: sand[100],
    300: sand[200],
    400: sand[300],
    500: sand[400],
    600: sand[500],
    700: sand[600],
    800: sand[800],
    900: sand[900],
};

export const secondary = {
    lighter: sand[600],
    light: sand[700],
    main: sand[900], // #201913 - dark band / dark buttons
    dark: '#3A2F25', // dark button hover
    darker: '#000000',
    contrastText: cream,
};

export const primary = {
    lighter: brand[100],
    light: brand[400], // #DF8663
    main: brand[500], // #D96C47
    dark: brand[600], // #BC4E2C - hover, links (AA on white)
    darker: brand[800],
    contrastText: '#FFFFFF',
};

export const info = {
    lighter: '#D4E9EE',
    light: '#6FB3C0',
    main: semantic.info, // #2C7A8C
    dark: '#1E5A68',
    darker: '#123A44',
    contrastText: '#FFFFFF',
};

export const success = {
    lighter: '#D6EBDD',
    light: '#6BB088',
    main: semantic.success, // #2E7D4F
    dark: '#1F5C39',
    darker: '#123A24',
    contrastText: '#FFFFFF',
};

export const warning = {
    lighter: '#F5E6C8',
    light: '#DDB05A',
    main: semantic.warning, // #B7791F
    dark: semantic.warningText, // #8A5A14
    darker: '#5C3B0D',
    contrastText: '#FFFFFF',
};

export const error = {
    lighter: '#F3D6D2',
    light: '#D97B70',
    main: semantic.error, // #C0392B
    dark: '#94281D',
    darker: '#611A12',
    contrastText: '#FFFFFF',
};

export const common = {
    black: '#000000',
    white: '#FFFFFF',
};

export const action = {
    hover: alpha(grey[500], 0.08),
    selected: alpha(grey[500], 0.16),
    disabled: alpha(grey[500], 0.8),
    disabledBackground: alpha(grey[500], 0.24),
    focus: alpha(grey[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
};

const base = {
    primary,
    secondary,
    info,
    success,
    warning,
    error,
    grey,
    common,
    divider: sand[300], // #D3C8BD
    action,
};

// ----------------------------------------------------------------------

export function palette(mode: 'light' | 'dark') {
    const light = {
        ...base,
        mode: 'light',
        text: {
            primary: ink, // #211C17
            secondary: sand[600], // #6B5F53
            disabled: sand[400], // #A99C8F
        },
        background: {
            paper: '#FFFFFF',
            default: sand[50], // #F6F1EA
            dropdown: sand[900],
            neutral: sand[100], // #EFE8DF
        },
        action: {
            ...base.action,
            active: sand[500],
        },
    };

    const dark = {
        ...base,
        mode: 'dark',
        divider: darkMode.border,
        text: {
            primary: darkMode.text, // #F5EFE8
            secondary: alpha(cream, 0.65),
            disabled: alpha(cream, 0.4),
        },
        background: {
            paper: darkMode.surface, // #241D16
            default: darkMode.bg, // #171210
            dropdown: darkMode.surface,
            neutral: alpha(cream, 0.06),
        },
        action: {
            ...base.action,
            hover: alpha(cream, 0.08),
            selected: alpha(cream, 0.16),
            active: alpha(cream, 0.6),
        },
    };

    return mode === 'light' ? light : dark;
}
