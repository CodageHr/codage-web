import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';

export default function TermsOfUseContent() {

    const { translate } = useTranslate();

    return <Container >
        <Box sx={{
            maxWidth: '40rem',
            padding: 4,
            margin: 'auto'
        }}>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('terms_of_use_intro')}</Typography>
                <Typography variant={'body1'} >{translate('terms_of_use_intro_p1')}</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('terms_of_use_website_use')}</Typography>
                <Typography variant={'body1'} >{translate('terms_of_use_website_use_p1')}</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('terms_of_use_content')}</Typography>
                <Typography variant={'body1'} >{translate('terms_of_use_content_p1')}</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('terms_of_use_privacy')}</Typography>
                <Typography variant={'body1'} >
                    {translate('terms_of_use_privacy_p1')}
                    <Link component={RouterLink}  target={'_blank'} rel="noopener" href={paths.privacyPolicy} mx={1} color="primary.main">
                        {translate('privacy_policy')}.
                    </Link>
                </Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={'h3'} mb={1}>{translate('terms_of_use_jurisdiction')}</Typography>
                <Typography variant={'body1'} >{translate('terms_of_use_jurisdiction_p1')}</Typography>
            </Box>
        </Box>
    </Container>;

}
