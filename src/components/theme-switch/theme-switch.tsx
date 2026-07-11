'use client';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { useTranslate } from '@base/locales';

import Iconify from '@components/iconify';
import { useSettingsContext } from '@components/settings';

// ----------------------------------------------------------------------

const ThemeSwitch = (props: IconButtonProps) => {
    const settings = useSettingsContext();

    const { t } = useTranslate();

    const isDark = settings.themeMode === 'dark';

    return (
        <IconButton
            color="inherit"
            onClick={() => settings.onUpdate('themeMode', isDark ? 'light' : 'dark')}
            aria-label={t(isDark ? 'theme_switch_light' : 'theme_switch_dark')}
            {...props}
        >
            <Iconify icon={isDark ? 'solar:sun-bold' : 'solar:moon-bold'} width={22} />
        </IconButton>
    );
};

export default ThemeSwitch;
