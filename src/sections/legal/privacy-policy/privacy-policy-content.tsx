import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:before': {
        content: '"―"',
        color: theme.palette.primary.main,
        paddingRight:theme.spacing(1)
    }
}));
export default function PrivacyPolicyContent() {

    const { translate } = useTranslate();

    return <Container >
        <Box sx={{
            maxWidth: '40rem',
            padding: 4,
            margin: 'auto'
        }}>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('privacy_policy_intro')}</Typography>
                <Typography variant={'body1'} mb={1} >{translate('privacy_policy_intro_p1')}</Typography>
                <Typography variant={'body1'} mb={1}>{translate('privacy_policy_intro_p2')}</Typography>
                <Typography variant={'body1'} mb={1}>{translate('privacy_policy_intro_p3')}</Typography>
                <Typography variant={'body1'} mb={1}>{translate('privacy_policy_intro_p4')}</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('privacy_policy_collect_info_title')}</Typography>
                <Typography variant={'body1'} mb={1} >{translate('privacy_policy_collect_info_p1')}</Typography>
                <Typography variant={'h4'} mb={1}>{translate('privacy_policy_collect_info_subtitle_1')}</Typography>
                <Typography variant={'body1'} mb={1}>{translate('privacy_policy_collect_info_subtitle_1_p1')}</Typography>
                <Typography variant={'body1'} mb={1}>{translate('privacy_policy_collect_info_subtitle_1_p2')}</Typography>
                <Typography variant={'body1'}  mb={1}>{translate('privacy_policy_collect_info_subtitle_1_p3')}</Typography>
                <Typography variant={'body1'}  mb={1}>{translate('privacy_policy_collect_info_subtitle_1_p4')}</Typography>
                <Typography variant={'h4'} mb={1}>{translate('privacy_policy_collect_info_subtitle_2')}</Typography>
                <Typography variant={'body1'} mb={1}>{translate('privacy_policy_collect_info_subtitle_2_p1')}</Typography>
                <Typography variant={'body1'} mb={1}>{translate('privacy_policy_collect_info_subtitle_2_p2')}</Typography>
                <Typography variant={'body1'}  mb={1}>{translate('privacy_policy_collect_info_subtitle_2_p3')}</Typography>
                <Typography variant={'body1'}  mb={1}>{translate('privacy_policy_collect_info_subtitle_2_p4')}</Typography>
                <Typography variant={'body1'}  mb={1}>{translate('privacy_policy_collect_info_subtitle_2_p5')}</Typography>
                <Typography variant={'body1'}  mb={1}>{translate('privacy_policy_collect_info_subtitle_2_p6')}</Typography>
                <Box mb={2}>
                    <Typography variant={'body1'} mb={1}>{translate('privacy_policy_collect_info_subtitle_2_p8')}</Typography>
                    <List>
                        {[ ...Array(6) ].map((_, index) => <StyledListItem key={`privacy_policy_p8_${index}`}>
                            <ListItemText
                                primary={translate(`privacy_policy_collect_info_subtitle_2_p8_${index + 1}`)}
                            />
                        </StyledListItem>)}

                    </List>
                </Box>
                <Box mb={2}>
                    <Typography variant={'h3'} mb={1}>{translate('privacy_policy_disclosure')}</Typography>
                    <Typography variant={'body1'} mb={1} >{translate('privacy_policy_disclosure_p1')}</Typography>
                    <Typography variant={'body1'} mb={1}>{translate('privacy_policy_disclosure_p2')}</Typography>
                </Box>
                <Box mb={2}>
                    <Typography variant={'h3'} mb={1}>{translate('privacy_policy_info_access')}</Typography>
                    <Typography variant={'body1'} mb={1} >{translate('privacy_policy_info_access_p1')}</Typography>
                    <Typography variant={'body1'} mb={1}>{translate('privacy_policy_info_access_p2')}</Typography>
                    <Typography variant={'body1'} mb={1}>{translate('privacy_policy_info_access_p3')}</Typography>
                </Box>
                <Box mb={2}>
                    <Typography variant={'h3'} mb={1}>{translate('privacy_policy_info_retention')}</Typography>
                    <Typography variant={'body1'} mb={1} >{translate('privacy_policy_info_retention_p1')}</Typography>
                    <Typography variant={'body1'} mb={1}>{translate('privacy_policy_info_retention_p2')}</Typography>
                    <Typography variant={'body1'} mb={1}>{translate('privacy_policy_info_retention_p3')}</Typography>
                    <Typography variant={'body1'} mb={1}>{translate('privacy_policy_info_retention_p4')}</Typography>
                </Box>
                {/* <Box mb={2}>
                    <Typography variant={'h3'} mb={1}>{translate('privacy_policy_child_protection')}</Typography>
                    <Typography variant={'body1'} mb={1} >{translate('privacy_policy_child_protection_p1')}</Typography>
                </Box> */}
                <Box mb={2}>
                    <Typography variant={'h3'} mb={1}>{translate('privacy_policy_info_security')}</Typography>
                    <Typography variant={'body1'} mb={1} >{translate('privacy_policy_info_security_p1')}</Typography>
                </Box>
                <Box mb={2}>
                    <Typography variant={'h3'} mb={1}>{translate('privacy_policy_changes')}</Typography>
                    <Typography variant={'body1'} mb={1} >{translate('privacy_policy_changes_p1')}</Typography>
                    <Typography variant={'body1'} mb={1} >{translate('privacy_policy_changes_p2')}</Typography>
                </Box>
                <Box mb={2}>
                    <Typography variant={'h3'} mb={1}>{translate('privacy_policy_suggestion')}</Typography>
                    <Typography variant={'body1'} mb={1} >
                        {translate('privacy_policy_suggestion_p1')}
                        <Link component={RouterLink}  target={'_blank'} rel="noopener" href={'https://azop.hr/kontakt/'} mx={1} color="primary.main">
                            {translate('here')}.
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Container>;

}
