// import { HomeView } from 'src/sections/home/view';
import ComingSoonView from 'src/sections/coming-soon/view';

import CompactLayout from 'src/layouts/compact';
// ----------------------------------------------------------------------

export const metadata = {
  title: 'Stižemo uskoro'
};

export default function HomePage() {
  return <CompactLayout><ComingSoonView /></CompactLayout>;
}
