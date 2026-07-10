import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { bgGradient } from '@theme/css';

type LegalPostHeaderProps = {
    title:string
    subtitle?:string
}

const StyledRoot = styled(Box)(({ theme }) => ({
    ...bgGradient({
        startColor: alpha(theme.palette.background.neutral, theme.palette.mode === 'light' ? 0.65 : 1),
        endColor: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.65 : 1)
    }),
    height: '20rem',
    [theme.breakpoints.up('md')]: {
        height: '30 rem'
    },
    textAlign: 'center',

}));

export default function LegalPostHeader({ title, subtitle }:LegalPostHeaderProps) {

    return (
        <StyledRoot
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container >
                <Typography variant={'h1'} >{title}</Typography>
                {subtitle && <Typography variant={'body1'} sx={{
                    mt: 4
                }} >{subtitle}</Typography>}
            </Container>
        </StyledRoot>
    );

}
