'use client';

import { useState, useEffect } from 'react';
import { hasCookie, setCookie } from 'cookies-next/client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';
import { COOKIE_NAME } from '@base/config-global';

import Iconify from '@components/iconify';


const StyledRoot = styled(Paper)(({ theme }) => ({
    width: '100%',
    zIndex: 999,
    position: 'fixed',
    bottom: 0,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
}));

const CookieBanner = () => {

    const { translate } = useTranslate();
    const theme = useTheme();

    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        setShowConsent(!hasCookie(COOKIE_NAME));
    }, []);


    const setCookieVal = () => {


        setShowConsent(false);
        setCookie(COOKIE_NAME, 'true', {
            maxAge: 60 * 60 * 24 * 365,
            path: '/',
        });
    }

    if(!showConsent) return null;

    return (
        <StyledRoot>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: theme.breakpoints.values.lg
                }}>
                <Typography variant={'body1'}>
                    {translate('cookie_text')}
                    <Link
                        component={RouterLink}
                        target={'_blank'}
                        rel="noopener"
                        href={paths.cookies}
                        sx={{
                            mx: 1,
                            color: "primary.main"
                        }}>
                        {translate('cookie_policy_banner')}.
                    </Link>,
                    <Link
                        component={RouterLink}
                        target={'_blank'}
                        rel="noopener"
                        href={paths.privacyPolicy}
                        sx={{
                            mx: 1,
                            color: "primary.main"
                        }}>
                        {translate('privacy_policy_banner')}.
                    </Link>
                    {translate('and')}
                    <Link
                        component={RouterLink}
                        target={'_blank'}
                        rel="noopener"
                        href={paths.termsOfUse}
                        sx={{
                            mx: 1,
                            color: "primary.main"
                        }}>
                        {translate('terms_of_use_banner')}.
                    </Link>
                </Typography>
                <Button sx={{ ml:2}} variant={'contained'} color={'primary'} onClick={setCookieVal} size= {'large'} startIcon={<Iconify icon={'material-symbols:keyboard-arrow-right'} />}>
                    OK
                </Button>
            </Box>
        </StyledRoot>
    );
}

export default CookieBanner;
