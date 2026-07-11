'use client';

import MainLayout from 'src/layouts/main';

import HomeHero from '../home-hero';
import HomeServices from '../home-minimal';
import HomeCta from '../home-advertisement';
import HomeProcess from '../home-how-it-works';
import HomeTestimonials from '../home-testimonials';

// ----------------------------------------------------------------------

export default function HomeView() {
    return (
        <MainLayout>
            <HomeHero />
            <HomeServices />
            <HomeProcess />
            <HomeTestimonials />
            <HomeCta />
        </MainLayout>
    );
}
