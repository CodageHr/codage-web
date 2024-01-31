'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeMinimal from '../home-minimal';
import HomeHowItWorks from '../home-how-it-works';
import HomeAdvertisement from '../home-advertisement';
import HomeTestimonals from '../home-testimonials';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function HomeView() {
    const { scrollYProgress } = useScroll();

    return (
        <MainLayout>
            <ScrollProgress scrollYProgress={scrollYProgress} />

            <HomeHero />

            <Box
                sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    bgcolor: 'background.default',
                }}
            >
                <HomeMinimal />
                <HomeHowItWorks />
                <HomeTestimonals />
                <HomeAdvertisement />


                {/* <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces />

        <HomePricing />

        <HomeLookingFor />

        <HomeAdvertisement /> */ }
            </Box>
        </MainLayout>
    );
}
