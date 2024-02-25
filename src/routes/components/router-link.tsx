import { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';

// ----------------------------------------------------------------------
interface AnchorProps extends LinkProps {
    target?: HTMLAnchorElement['target'];
    rel?: HTMLAnchorElement['rel'];
}

const RouterLink = forwardRef<HTMLAnchorElement, AnchorProps>(( { ...other }, ref) => (
    <Link ref={ref} {...other} />
));

export default RouterLink;
