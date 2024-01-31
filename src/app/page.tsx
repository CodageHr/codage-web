// import { HomeView } from 'src/sections/home/view';
import CompactLayout from 'src/layouts/compact';

import ComingSoonView from 'src/sections/coming-soon/view';
// ----------------------------------------------------------------------

export const metadata = {
    title: 'Stižemo uskoro'
};

export default function HomePage() {
    return <CompactLayout><ComingSoonView /></CompactLayout>;
}
