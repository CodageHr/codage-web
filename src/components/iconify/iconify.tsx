import { forwardRef } from 'react';
import { Icon } from '@iconify/react';

import Box, { BoxProps } from '@mui/material/Box';

import { IconifyProps } from './types';

// ----------------------------------------------------------------------

// `width` is no longer a MUI system prop in v9, so it is declared explicitly and
// applied via `sx`. Props are typed for the underlying @iconify/react `Icon`.
type Props = BoxProps<typeof Icon> & {
  icon: IconifyProps;
  width?: number | string;
};

const Iconify = forwardRef<SVGElement, Props>(({ icon, width = 20, sx, ...other }, ref) => (
    <Box
        ref={ref}
        component={Icon}
        className="component-iconify"
        icon={icon}
        sx={[{ width, height: width, flexShrink: 0, display: 'inline-flex' }, ...(Array.isArray(sx) ? sx : [sx])]}
        {...other}
    />
));

export default Iconify;
