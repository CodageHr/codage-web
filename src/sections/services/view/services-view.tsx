'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';
import { ContactCard } from '@components/have-an-idea-contact-card';

import ServicesWebDev from '@sections/services/services-web-dev';
import ServicesToolbox from '@sections/services/services-toolbox';
import ServicesMobileDev from '@sections/services/services-mobile-dev';

import ServicesHero from '../services-hero';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ServicesView() {
    const { scrollYProgress } = useScroll();

    return (
        <MainLayout>
            <ScrollProgress scrollYProgress={scrollYProgress} />

            <ServicesHero />
            <ServicesWebDev />
            <ServicesMobileDev />
            <ServicesToolbox />
            <ContactCard />
        </MainLayout>
    );
}
