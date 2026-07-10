import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import Image from '@components/image';
import { varFade, MotionContainer } from '@components/animate';
import Carousel, { useCarousel, CarouselArrows } from '@components/carousel';

import { bgGradient } from '@theme/css';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
    ...bgGradient({
        color: alpha(theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.paper, theme.palette.mode === 'light' ? 0.70 : 0.88),
        imgUrl: '/assets/background/overlay_4.jpg',
    }),
}));

type IPromoSlide = {
    id: number;
    title: string;
    image: string;
};

type CarouselItemProps = {
    item: IPromoSlide;
    active: boolean;
};

const promoSlides :IPromoSlide[] = [
    {
        id: 1,
        title: 'JetBrains Idea',
        image: '/assets/toolbox/IntelliJ_IDEA.svg'
    },
    {
        id: 2,
        title: 'Laravel',
        image: '/assets/toolbox/Laravel.svg'
    },
    {
        id: 3,
        title: 'NextJS',
        image: '/assets/toolbox/Nextjs-logo.svg'
    },
    {
        id: 4,
        title: 'React',
        image: '/assets/toolbox/react.svg'
    },
    {
        id: 5,
        title: 'AWS',
        image: '/assets/toolbox/aws.svg'
    },
    {
        id: 6,
        title: 'NodeJs',
        image: '/assets/toolbox/node.svg'
    },
    {
        id: 7,
        title: 'Firebase',
        image: '/assets/toolbox/firebase.svg'
    },
    {
        id: 8,
        title: 'Slack',
        image: '/assets/toolbox/slack_logo.svg'
    }
];

export default function ServicesToolbox() {

    const carousel = useCarousel({
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 6000,
        dots: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 3 },
            },
        ],
    });

    return (
        <StyledRoot>
            <Container sx={{
                py:5
            }} >
                <Stack>
                    <Typography variant={'overline'} sx={{
                        textAlign: 'center'
                    }}>Tehnologije koje koristimo</Typography>
                    <Typography variant={'h3'} sx={{
                        textAlign: 'center'
                    }}>Naši svakodnenvni alati</Typography>
                </Stack>

                <Box sx={{ position: 'relative', mt:4 }}>
                    <CarouselArrows
                        shape="rounded"
                        onNext={carousel.onNext}
                        onPrev={carousel.onPrev}
                        leftButtonProps={{
                            sx: {
                                left: {
                                    xs: 0,
                                    md: 24
                                }
                            },
                        }}
                        rightButtonProps={{
                            sx: {
                                right: {
                                    xs: 0,
                                    md: 24
                                }
                            },
                        }}
                    >
                        <Grid container spacing={10} sx={{
                            justifyContent: 'center'
                        }}>
                            <Grid size={{ xs: 12, md: 10 }}>
                                <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                                    {promoSlides.map((item,index) => (
                                        <CarouselItem key={`presentation_item_${item.id}`}  item={item} active={index === carousel.currentIndex} />
                                    ))}
                                </Carousel>
                            </Grid>
                        </Grid>
                    </CarouselArrows>
                </Box>
            </Container>
        </StyledRoot>
    );

}

function CarouselItem({ item, active }: CarouselItemProps) {

    const theme = useTheme();

    const { title, image } = item;

    const variants = theme.direction === 'rtl' ? varFade().inLeft : varFade().inRight;

    return (
        <Stack
            component={MotionContainer}
        >
            <m.div variants={variants}>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        m: 1
                    }}>
                    <Image
                        src={image}
                        alt={title}
                        width={'auto'}
                        height={100}
                        imageWrapperSx={{
                            objectFit: 'contain'
                        }}
                    />
                </Stack>

            </m.div>
            <m.div variants={variants}>
                <Typography variant={'subtitle1'} sx={{
                    textAlign: 'center'
                }}>
                    {title}
                </Typography>
            </m.div>
        </Stack>
    );

}
