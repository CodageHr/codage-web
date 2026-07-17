import { usePathname } from 'next/navigation';

import { useCurrentLang } from '@base/locales/i18n-provider';
import { localizeHref } from '@routes/localize-href';

// ----------------------------------------------------------------------

type ReturnType = boolean;

export function useActiveLink(path: string, deep = true): ReturnType {
    const pathname = usePathname();
    const lang = useCurrentLang();

    const checkPath = path.startsWith('#');

    // pathname is locale-prefixed ('/hr/…'); localise the target before comparing.
    const currentPath = checkPath ? path : localizeHref(path, lang);

    const normalActive = !checkPath && pathname === currentPath;

    const deepActive = !checkPath && pathname.includes(currentPath);

    return deep ? deepActive : normalActive;
}
