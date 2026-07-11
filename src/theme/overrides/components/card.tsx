import { Theme } from '@mui/material/styles';

import { radii } from '../../tokens';

// ----------------------------------------------------------------------

export function card(theme: Theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    boxShadow: theme.customShadows.card, // soft-md
                    borderRadius: radii.lg, // 16
                    zIndex: 0, // Fix Safari overflow: hidden with border radius
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(4, 4, 0),
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(4), // 32
                },
            },
        },
    };
}
