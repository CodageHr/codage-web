import AboutView from '@sections/about/view/about-view';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'O nama',
    description:
        'Codage je mali softverski studio iz Splita. Naš pristup radu, vrijednosti i tim koji stoji iza vaših projekata.',
    alternates: { canonical: '/about-us/' },
};

export default function AboutPage() {
    return <AboutView />;
}
