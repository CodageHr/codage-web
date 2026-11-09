import { alpha, Theme } from '@mui/material/styles';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { filledInputClasses } from '@mui/material/FilledInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { sand, radii, focus, darkMode } from '../../tokens';

// ----------------------------------------------------------------------

export function textField(theme: Theme) {
    const isLight = theme.palette.mode === 'light';

    const color = {
        focused: theme.palette.text.primary,
        active: theme.palette.text.secondary,
        placeholder: theme.palette.text.disabled,
    };

    const font = {
        label: theme.typography.body1,
        value: theme.typography.body2,
    };

    const fieldBg = isLight ? sand[50] : darkMode.inputBg;
    const fieldBorder = isLight ? sand[200] : darkMode.inputBorder;
    const fieldHoverBorder = isLight ? sand[300] : alpha('#F5EFE8', 0.35);
    const focusRing = isLight ? focus.inputRing : focus.inputRingDark;

    return {
    // HELPER
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(0.75),
                    fontSize: 12.5,
                },
            },
        },

        // LABEL
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    ...font.value,
                    color: color.placeholder,
                    [`&.${inputLabelClasses.shrink}`]: {
                        ...font.label,
                        fontWeight: 600,
                        color: color.active,
                        [`&.${inputLabelClasses.focused}`]: {
                            color: color.focused,
                        },
                        [`&.${inputLabelClasses.error}`]: {
                            color: theme.palette.error.main,
                        },
                        [`&.${inputLabelClasses.disabled}`]: {
                            color: theme.palette.text.disabled,
                        },
                        [`&.${inputLabelClasses.filled}`]: {
                            transform: 'translate(12px, 6px) scale(0.75)',
                        },
                    },
                },
            },
        },

        // BASE
        MuiInputBase: {
            styleOverrides: {
                root: {
                    [`&.${inputBaseClasses.disabled}`]: {
                        '& svg': {
                            color: theme.palette.text.disabled,
                        },
                    },
                },
                input: {
                    ...font.value,
                    '&::placeholder': {
                        opacity: 1,
                        color: color.placeholder,
                    },
                },
            },
        },

        // STANDARD
        MuiInput: {
            styleOverrides: {
                underline: {
                    '&:before': {
                        borderBottomColor: alpha(theme.palette.grey[500], 0.32),
                    },
                    '&:after': {
                        borderBottomColor: color.focused,
                    },
                },
            },
        },

        // OUTLINED - the primary field style (h48, r10, bg sand-50, 1.5px border)
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: radii.input,
                    backgroundColor: fieldBg,
                    transition: theme.transitions.create(['border-color', 'box-shadow', 'background-color'], {
                        duration: theme.transitions.duration.shorter,
                    }),
                    '&:hover': {
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: fieldHoverBorder,
                        },
                    },
                    [`&.${outlinedInputClasses.focused}`]: {
                        backgroundColor: isLight ? '#FFFFFF' : darkMode.inputBg,
                        boxShadow: focusRing,
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: theme.palette.primary.main,
                            borderWidth: 1.5,
                        },
                    },
                    [`&.${outlinedInputClasses.error}`]: {
                        boxShadow: `0 0 0 3px ${alpha(theme.palette.error.main, 0.18)}`,
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: theme.palette.error.main,
                        },
                    },
                    [`&.${outlinedInputClasses.disabled}`]: {
                        backgroundColor: isLight ? sand[100] : alpha('#F5EFE8', 0.04),
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'transparent',
                        },
                    },
                },
                input: {
                    padding: '13px 14px',
                },
                notchedOutline: {
                    borderColor: fieldBorder,
                    borderWidth: 1.5,
                    transition: theme.transitions.create(['border-color'], {
                        duration: theme.transitions.duration.shortest,
                    }),
                },
            },
        },

        // FILLED
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: radii.input,
                    backgroundColor: alpha(theme.palette.grey[500], 0.08),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.grey[500], 0.16),
                    },
                    [`&.${filledInputClasses.focused}`]: {
                        backgroundColor: alpha(theme.palette.grey[500], 0.16),
                    },
                    [`&.${filledInputClasses.error}`]: {
                        backgroundColor: alpha(theme.palette.error.main, 0.08),
                        [`&.${filledInputClasses.focused}`]: {
                            backgroundColor: alpha(theme.palette.error.main, 0.16),
                        },
                    },
                    [`&.${filledInputClasses.disabled}`]: {
                        backgroundColor: theme.palette.action.disabledBackground,
                    },
                },
            },
        },
    };
}
