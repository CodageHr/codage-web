import { HomeView } from '@sections/home/view';
// ----------------------------------------------------------------------

export const metadata = {
    title: 'Početna',
    description:
        'Softverski studio iz Splita. Web i mobilne aplikacije po mjeri — od prve skice do produkcije. React, Next.js, Spring Boot, Java, Scala, Laravel.',
};

export default function HomePage() {
    return <HomeView />;
}
