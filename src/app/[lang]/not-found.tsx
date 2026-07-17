import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

export const metadata = {
    title: '404 Stranica nije pronađena!',
};

export default function NotFoundPage() {
    return <NotFoundView />;
}
