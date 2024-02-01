import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { varFade, MotionContainer } from '@components/animate';
import Carousel, { useCarousel, CarouselArrows } from '@components/carousel';

import { bgGradient } from '@theme/css';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
    ...bgGradient({
        color: alpha(theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default, theme.palette.mode === 'light' ? 0.70 : 1),
        imgUrl: '/assets/background/overlay_4.jpg',
    }),
}));

type IPromoSlide = {
    id: number;
    name: string;
    position: string;
    company: string;
    comment: string;
    image?: string;
};

type CarouselItemProps = {
    item: IPromoSlide;
    active: boolean;
};

const promoSlides :IPromoSlide[] = [
    {
        id: 1,
        name: 'Slobodan Jović',
        position: 'CEO i osnivač',
        company: 'Selekcija.hr',
        comment: 'Raditi s Petrom iz tvrtke Codage bio je apsolutni užitak! Njegova stručnost u razvoju web aplikacije za tvrtku Selekcija bila je ključna za postizanje visokih standarda. Petar je briljirao u kreiranju inovativnih rješenja, prilagodbi sučelja i osiguravanju besprijekornog korisničkog iskustva. Svojom posvećenošću i preciznošću, Petar je znatno doprinio uspjehu našeg projekta. Rad s njim preporučujemo svima koji traže stručnjaka u području web razvoja!',
        image: '/assets/images/home/testimonals/slobodan_jovic_selekcija.jpeg'
    },
    {
        id: 2,
        name: 'Brian Kulman',
        position: 'CTO',
        company: 'Nearpeer',
        comment: 'Petar Vrkić is a coding expert. Over two years, Petar’s enhancements consistently raised our EdTech app to new levels of excellence. Petar is an expert in React, JavaScript, AWS, and databases. He had us covered from front-end to back-end. His love of problem-solving and ability to master new technologies helped us take huge strides with SSO, security, and reliability. His constant positivity and can-do attitude made collaborating a wonderful experience. Petar’s experience and knowledge would be a great asset to any team or project!',
        image: '/assets/images/home/testimonals/brian_kulman_nearpeer.jpeg'
    },
    {
        id: 3,
        name: 'Bruno Batarelo',
        position:'CEO',
        company: 'Quantum-bit',
        comment: 'Petar se pokazao kao izuzetno vrijedan član tima tijekom suradnje na našim zajedničkim projektima. Njegovo stručno znanje iz područja web i mobilnog razvoja bilo je ključno u stvaranju inovativne web i mobilne aplikacije. Njegova predanost, brza reakcija na izazove i kreativnost doprinijele su uspješnoj implementaciji projekta.',
    },
];

export default function HomeServicesPresentation() {

    const carousel = useCarousel({
        autoplay: true,
        speed: 800,
        autoplaySpeed: 6000,
        dots: true
    });

    return (
        <StyledRoot>
            <Container sx={{
                py:5
            }} >
                <Stack>
                    <Typography variant={'overline'} textAlign={'center'}>Iskustva</Typography>
                    <Typography variant={'h3'} textAlign={'center'}>Tko Cijeni Naš Rad</Typography>
                </Stack>

                <Box sx={{ position: 'relative', mt:4 }}>
                    <CarouselArrows
                        shape="rounded"
                        onNext={carousel.onNext}
                        onPrev={carousel.onPrev}
                        leftButtonProps={{
                            sx: {
                                left: 24,
                            },
                        }}
                        rightButtonProps={{
                            sx: {
                                right: 24,
                            },
                        }}
                    >
                        <Grid container spacing={10} justifyContent={'center'}>
                            <Grid xs={12} md={8}>
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

    const { company,comment, name, image, position } = item;

    const variants = theme.direction === 'rtl' ? varFade().inLeft : varFade().inRight;

    return (
        <Stack
            component={MotionContainer}
            animate={active}
            action
        >

            <m.div variants={variants}>
                <Typography variant={'body1'} textAlign={'center'} >
                    {comment}
                </Typography>
            </m.div>
            <m.div variants={variants}>
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    spacing={1}
                    mt={6}
                >
                    <Avatar src={image} alt={name} sx={{ width: 96, height: 96, fontSize:48 }}>
                        {name?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography variant={'h5'}  >
                        {name}
                    </Typography>
                    <Typography variant={'body2'}  >
                        {company}
                    </Typography>
                    <Typography variant={'body2'}  >
                        {position}
                    </Typography>
                </Stack>

            </m.div>
        </Stack>

    );

}
