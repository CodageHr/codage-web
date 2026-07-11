import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useTranslate } from '@base/locales';
import { RouterLink } from '@routes/components';

import { proseSx } from '@components/_ui/prose-legal';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:before': {
        content: '"―"',
        color: theme.palette.primary.main,
        paddingRight:theme.spacing(1)
    }
}));
export default function CookiesContent() {

    const { translate } = useTranslate();

    return (
        <Container>
            <Box sx={proseSx}>
                <Box sx={{
                    mb: 2
                }}>
                    <Typography variant={'h3'} sx={{
                        mb: 1
                    }}>{translate('cookie_policy_log_info')}</Typography>
                    <Typography variant={'body1'} >{translate('cookie_policy_log_info_text')}</Typography>
                </Box>
                <Box sx={{
                    mb: 2
                }}>
                    <Typography variant={'h3'} sx={{
                        mb: 1
                    }}>{translate('cookie_policy_what_are_cookies')}</Typography>
                    <Typography variant={'body1'} sx={{
                        mb: 1
                    }} >{translate('cookie_policy_what_are_cookies_p1')}</Typography>
                    <Typography variant={'body1'} sx={{
                        mb: 1
                    }}>{translate('cookie_policy_what_are_cookies_p2')}</Typography>
                    <Typography variant={'body1'} sx={{
                        mb: 1
                    }}>{translate('cookie_policy_what_are_cookies_p3')}</Typography>
                    <Typography variant={'body1'} sx={{
                        mb: 1
                    }}>{translate('cookie_policy_what_are_cookies_p4')}</Typography>
                    <Typography variant={'body1'} >{translate('cookie_policy_what_are_cookies_p5')}</Typography>
                </Box>
                <Box sx={{
                    mb: 2
                }}>
                    <Typography variant={'h3'} sx={{
                        mb: 1
                    }}>{translate('types_of_cookies')}</Typography>
                    <Typography variant={'body1'} sx={{
                        mb: 1
                    }} >{translate('types_of_cookies_p1')}</Typography>
                    <Typography variant={'body1'} sx={{
                        mb: 1
                    }}>
                        {translate('types_of_cookies_p2')}
                        <Link
                            component={RouterLink}
                            target={'_blank'}
                            rel="noopener"
                            href={'https://policies.google.com/privacy?hl=hr-HR'}
                            sx={{
                                mx: 1,
                                color: "primary.main"
                            }}>
                            {translate('here')}.
                        </Link>
                    </Typography>
                </Box>
                <Box sx={{
                    mb: 2
                }}>
                    <Typography variant={'h3'} sx={{
                        mb: 1
                    }}>{translate('disabling_cookies')}</Typography>
                    <Typography variant={'body1'} sx={{
                        mb: 1
                    }}>{translate('disabling_cookies_p1')}</Typography>
                    <Typography variant={'body1'} sx={{
                        mb: 1
                    }} >{translate('disabling_cookies_p2')}</Typography>
                    <Typography variant={'body1'} >{translate('disabling_cookies_p3')}</Typography>
                    <List>
                        <StyledListItem>
                            <Link
                                target={'_blank'}
                                rel="noopener"
                                href={'https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies'}
                            >
                                {translate('cookie_settings_IE')}
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link
                                target={'_blank'}
                                rel="noopener"
                                href={'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences'}
                            >
                                {translate('cookie_settings_Firefox')}
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link
                                href={'https://support.google.com/chrome/answer/95647'}
                                target={'_blank'}
                                rel="noopener"
                            >
                                {translate('cookie_settings_Chrome')}
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link
                                href={'https://support.apple.com/en-mn/guide/safari/sfri11471/17.0/mac/14.0'}
                                target={'_blank'}
                                rel="noopener"
                            >
                                {translate('cookie_settings_Safari')}
                            </Link>
                        </StyledListItem>

                    </List>
                </Box>
            </Box>
        </Container>
    );

}
