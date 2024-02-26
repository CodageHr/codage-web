import { m, MotionProps } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from '@hooks/use-responsive';

import { useTranslate } from '@base/locales';

import { varSlide, MotionContainer } from '@components/animate';

import { bgGradient } from '@theme/css';

export default function ServicesHero() {

    const { palette } = useTheme();
    const xlUp = useResponsive('up', 'xl');
    const smUp = useResponsive('up', 'sm');

    const { translate } = useTranslate();

    return <Stack
        spacing={1.5}
        direction={'row'}
        sx={{
            // eslint-disable-next-line no-nested-ternary
            height: xlUp ? 600 : (smUp ? 400 : 300),
            ...bgGradient({
                startColor: alpha(palette.primary.light, 0.45),
                endColor: alpha(palette.primary.dark, 0.55),
                imgUrl: '/assets/images/services/services_background_2.webp'
            })
        }}
    >
        <Container component={MotionContainer} sx={{ height: 1 }}>
            <Stack justifyContent={'center'} sx={{ height: '100%' }}>
                <TextAnimate text={translate('services_hero_title_1')}  sx={{ color:'primary.contrastText' }}/>
                <TextAnimate text={translate('services_hero_title_2')} sx={{ color:'primary.contrastText' }} />
            </Stack>
        </Container>
    </Stack>;

}

type TextAnimateProps = BoxProps &
    MotionProps & {
    text: string;
};

function TextAnimate({ text, variants, sx, ...other }: TextAnimateProps) {
    return (
        <Box
            component={m.div}
            sx={{
                typography: 'h2',
                overflow: 'hidden',
                display: 'flex',
                flexWrap: 'wrap',
                ...sx,
            }}
            {...other}
        >
            {text.split(' ').map((letter, index) => (
                <m.div key={index} variants={variants || varSlide().inDown} style={{ marginLeft: 10 }}>
                    {letter}
                </m.div>
            ))}
        </Box>
    );
}
