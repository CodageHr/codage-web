import { useMemo } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { useResponsive } from '@hooks/use-responsive';

import { useTranslate } from '@base/locales';

import SvgColor from '@components/svg-color';
import { varFade, MotionViewport } from '@components/animate';

import { bgGradient } from '@theme/css';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    ...bgGradient({
        startColor: alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.8 : 0.84),
        endColor: alpha(theme.palette.primary.light, theme.palette.mode === 'light' ? 0.9 : 0.84),
        /* imgUrl: '/assets/background/overlay_5.jpg', */
    }),
    padding:theme.spacing(8,0),
    [theme.breakpoints.up('md')]: {
        padding:theme.spacing(10,0)
    },

}));

// ----------------------------------------------------------------------

type HowWeWorkT = {
    bgColor: string,
    iconColor: string,
    iconPath: string,
    title: string
}

export default function HomeHowItWorks() {

    const mdUp = useResponsive('up', 'md');

    const { translate } = useTranslate();

    const theme = useTheme();


    const HOW_WE_WORK_LIST: HowWeWorkT[]  = useMemo(() => ([
        {
            title:translate('how_we_work_step_1'),
            iconPath: '/assets/icons/home/ic_analysis.svg',
            bgColor: '#FDAB76',
            iconColor: '#bb5110',
        },
        {
            title:translate('how_we_work_step_2'),
            iconPath: '/assets/icons/home/ic_sketch_design.svg',
            bgColor: '#31abf5',
            iconColor: '#0e496c',
        },
        {
            title:translate('how_we_work_step_3'),
            iconPath: '/assets/icons/home/ic_development.svg',
            bgColor: '#FFD666',
            iconColor: '#83691f',
        },
        {
            title:translate('how_we_work_step_4'),
            iconPath: '/assets/icons/home/ic_optimization.svg',
            bgColor: '#86E8AB',
            iconColor: '#06933c',
        }
    ]),[ translate ]);

    const renderSteps = (
        <Container>
            <Box
                gap={2}
                display="grid"
                gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                sx={{
                    alignItems: 'flex-end'
                }}
            >
                {HOW_WE_WORK_LIST.map((step, index) => (
                    <m.div key={`how_we_work${index}`} variants={varFade().inDown}>
                        <Card  sx={{
                            backgroundColor: step.bgColor,
                            marginBottom:{
                                xs: 0,
                                md: index === 0 ? 0 : theme.spacing(index * 3),
                            },
                            p: theme.spacing(4,2)
                        }}>
                            <SvgColor src={step.iconPath} sx={{ color: step.iconColor, width: 64, height: 64 }} />
                            <Typography variant={'h4'} color={step.iconColor} mt={5} textAlign={'right'} >{step.title}</Typography>
                        </Card>
                    </m.div>
                ))}

            </Box>
        </Container>
    );

    return (
        <StyledRoot>
            <Box
                component={Container}
                sx={{
                    mb:10,
                    textAlign: {
                        xs: 'center',
                        sm: 'left'
                    }
                }}>
                <Typography variant={'overline'} color={'primary.contrastText'} >Work Flow</Typography>
                <Typography variant={'h2'} color={'primary.contrastText'} >Princip rada</Typography>
                <Typography variant={'subtitle2'} color={'primary.contrastText'} >Kratki opis načina rada</Typography>
            </Box>
            <Box
                component={MotionViewport}
            >
                {renderSteps}
            </Box>
        </StyledRoot>
    );

}
