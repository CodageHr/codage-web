import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:before': {
        content: '"―"',
        color: theme.palette.primary.main,
        paddingRight:theme.spacing(1)
    }
}));
export default function InfoContent() {

    const { translate } = useTranslate();

    return <Container >
        <Box sx={{
            maxWidth: '40rem',
            padding: 4,
            margin: 'auto'
        }}>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('info_content_address')}</Typography>
                <Typography variant={'body1'} >Put gaja 6, 21292 Srinjine</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('info_content_registrant')}</Typography>
                <Typography variant={'body1'} >{translate('info_content_registrant_subtitle')}</Typography>
                <List>
                    <StyledListItem>
                        <ListItemText
                            primary={`${translate('info_mbs_number')}: 060445698`}
                        />
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText
                            primary={`${translate('info_vat_number')}: 49369795577`}
                        />
                    </StyledListItem>
                </List>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('info_content_board_members')}</Typography>
                <List>
                    <StyledListItem>
                        <ListItemText
                            primary={'Petar Vrkić'}
                        />
                    </StyledListItem>
                </List>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('info_content_base_capital')}</Typography>
                <Typography variant={'body1'} >{translate('info_content_base_capital_content')}</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('info_content_bank_details')}</Typography>
                <List>
                    <StyledListItem>
                        <ListItemText
                            primary={'IBAN: HR4223600001102990106'}
                        />
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText
                            primary={'Zagrebačka banka d.d.'}
                        />
                    </StyledListItem>
                </List>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('info_content_contact_information')}</Typography>
                <List>
                    <StyledListItem>
                        <ListItemText
                            primary={'Email: kontakt@codage.hr'}
                        />
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText
                            primary={`${translate('phone_number')}: +385 98 403 330`}
                        />
                    </StyledListItem>
                </List>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('info_cookie_and_privacy_policy')}</Typography>
                <Typography variant={'body1'} >
                    {translate('info_cookie_and_privacy_policy_content')}
                    <Link component={RouterLink} href={paths.termsOfUse} mx={1} color="primary.main">
                        {translate('terms_of_use')},
                    </Link>
                    <Link component={RouterLink} href={paths.privacyPolicy} mx={1} color="primary.main">
                        {translate('privacy_policy')}
                    </Link>
                    {translate('and')}
                    <Link component={RouterLink} mx={1} href={paths.cookies} color="primary.main">
                        {translate('cookie_policy')}
                    </Link>
                </Typography>
            </Box>

        </Box>

    </Container>;

}
