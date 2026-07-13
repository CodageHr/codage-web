import { alpha, Theme } from '@mui/material/styles';
import { ButtonProps, buttonClasses } from '@mui/material/Button';

import { brand, softShadows } from '../../tokens';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

// ----------------------------------------------------------------------

export function button(theme: Theme) {
    const lightMode = theme.palette.mode === 'light';

    const rootStyles = (ownerState: ButtonProps) => {
        const inheritColor = ownerState.color === 'inherit';

        const containedVariant = ownerState.variant === 'contained';

        const outlinedVariant = ownerState.variant === 'outlined';

        const textVariant = ownerState.variant === 'text';

        const softVariant = ownerState.variant === 'soft';

        const smallSize = ownerState.size === 'small';

        const mediumSize = ownerState.size === 'medium';

        const largeSize = ownerState.size === 'large';

        const baseStyle = {
            borderRadius: 12,
            fontWeight: 700,
            transition: theme.transitions.create(
                ['background-color', 'box-shadow', 'border-color', 'color'],
                { duration: 180, easing: 'ease-out' }
            ),
            '&:focus-visible': {
                outline: `2px solid ${theme.palette.primary.dark}`,
                outlineOffset: 2,
            },
        };

        const defaultStyle = {
            ...(inheritColor && {
                // CONTAINED (dark button on light surfaces)
                ...(containedVariant && {
                    color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: lightMode ? theme.palette.grey[900] : theme.palette.common.white,
                    '&:hover': {
                        backgroundColor: lightMode ? '#3A2F25' : theme.palette.grey[400],
                    },
                }),
                // OUTLINED / GHOST — 1.5px sand-300, ink text → hover brand-600
                ...(outlinedVariant && {
                    border: `1.5px solid ${theme.palette.divider}`,
                    color: theme.palette.text.primary,
                    '&:hover': {
                        borderColor: theme.palette.primary.dark,
                        color: theme.palette.primary.dark,
                        backgroundColor: 'transparent',
                    },
                }),
                // TEXT
                ...(textVariant && {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                    },
                }),
                // SOFT
                ...(softVariant && {
                    color: theme.palette.text.primary,
                    backgroundColor: alpha(theme.palette.grey[500], 0.08),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.grey[500], 0.24),
                    },
                }),
            }),
            ...(outlinedVariant && {
                borderWidth: 1.5,
                '&:hover': {
                    borderWidth: 1.5,
                },
            }),
        };

        const colorStyle = COLORS.map((color) => ({
            ...(ownerState.color === color && {
                // CONTAINED
                ...(containedVariant && {
                    // Light mode: brand-600 base keeps white button text at AA contrast (>=4.5:1).
                    // Dark mode keeps the mode-aware primary (#E07E58 + ink text, already AA).
                    ...(color === 'primary' && lightMode && {
                        backgroundColor: brand[600],
                        color: theme.palette.common.white,
                    }),
                    '&:hover': {
                        backgroundColor: color === 'primary' && lightMode ? brand[700] : theme.palette[color].dark,
                        boxShadow: color === 'primary' ? softShadows.primaryGlow : theme.customShadows[color],
                    },
                    ...(color === 'primary' && {
                        [`&.${buttonClasses.disabled}`]: {
                            backgroundColor: brand[200],
                            color: theme.palette.common.white,
                        },
                    }),
                }),
                // OUTLINED
                ...(outlinedVariant && {
                    border: `1.5px solid ${alpha(theme.palette[color].main, 0.5)}`,
                    '&:hover': {
                        borderColor: theme.palette[color].main,
                        backgroundColor: alpha(theme.palette[color].main, 0.08),
                    },
                }),
                // SOFT
                ...(softVariant && {
                    color: theme.palette[color][lightMode ? 'dark' : 'light'],
                    backgroundColor: alpha(theme.palette[color].main, 0.16),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette[color].main, 0.32),
                    },
                }),
            }),
        }));

        const disabledState = {
            [`&.${buttonClasses.disabled}`]: {
                // SOFT
                ...(softVariant && {
                    backgroundColor: theme.palette.action.disabledBackground,
                }),
            },
        };

        const size = {
            ...(smallSize && {
                height: 40,
                fontSize: 15,
                paddingLeft: 16,
                paddingRight: 16,
                ...(textVariant && {
                    paddingLeft: 8,
                    paddingRight: 8,
                }),
            }),
            ...(mediumSize && {
                height: 48,
                fontSize: 15.5,
                paddingLeft: 20,
                paddingRight: 20,
                ...(textVariant && {
                    paddingLeft: 10,
                    paddingRight: 10,
                }),
            }),
            ...(largeSize && {
                height: 56,
                fontSize: 16.5,
                paddingLeft: 28,
                paddingRight: 28,
                ...(textVariant && {
                    paddingLeft: 12,
                    paddingRight: 12,
                }),
            }),
        };

        return [baseStyle, defaultStyle, ...colorStyle, disabledState, size];
    };

    return {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }: { ownerState: ButtonProps }) => rootStyles(ownerState),
            },
        },
    };
}
