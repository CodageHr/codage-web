'use client';

import { useId, useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from '@routes/components';

import Iconify from '@components/iconify';

import { sand, cream, onDark, radii, softShadows } from 'src/theme/tokens';

import { type NavItem } from './config-navigation';

// ----------------------------------------------------------------------
// Desktop dropdown for a nav item with children (Services).
//
// - Opens on hover for a real mouse only (pointerType === 'mouse'). Touch taps
//   would otherwise fire pointerenter AND click, opening then instantly closing.
// - Click / Enter / Space / ArrowDown toggle it for touch and keyboard users;
//   when opened from the keyboard, focus moves into the menu (MenuList handles
//   arrow keys), Escape closes and returns focus to the trigger.
// - The trigger is a button, not a link, so it works on touch. The landing
//   anchor it used to point at stays reachable as the last item ("All services").

const CLOSE_DELAY = 120;

type Props = {
    item: NavItem;
    /** Trigger looks active (e.g. we are on one of its pages). */
    active: boolean;
    isChildActive: (path: string) => boolean;
    allLabel: string;
};

export default function NavDropdown({ item, active, isChildActive, allLabel }: Props) {
    const pathname = usePathname();

    const menuId = useId();

    const anchorRef = useRef<HTMLButtonElement>(null);

    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [open, setOpen] = useState(false);

    // Move focus into the menu only when it was opened from the keyboard.
    const [focusMenu, setFocusMenu] = useState(false);

    const cancelClose = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    }, []);

    const handleOpen = useCallback(
        (fromKeyboard = false) => {
            cancelClose();
            setFocusMenu(fromKeyboard);
            setOpen(true);
        },
        [cancelClose]
    );

    const handleClose = useCallback(() => {
        cancelClose();
        setOpen(false);
    }, [cancelClose]);

    const closeSoon = useCallback(() => {
        cancelClose();
        closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
    }, [cancelClose]);

    // Close on navigation, and never leave a timer running after unmount.
    useEffect(() => {
        handleClose();
    }, [pathname, handleClose]);

    useEffect(() => cancelClose, [cancelClose]);

    const handleMenuKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            handleClose();
            anchorRef.current?.focus();
        } else if (event.key === 'Tab') {
            handleClose();
        }
    };

    const itemSx = {
        display: 'block',
        whiteSpace: 'normal',
        minHeight: 0,
        px: 2,
        py: 1.5,
        borderRadius: `${radii.md}px`,
        '&:not(:last-of-type)': { mb: 0.25 },
        '&:hover, &.Mui-focusVisible': { bgcolor: alpha(cream, 0.06) },
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Box
                sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                onPointerEnter={(event) => event.pointerType === 'mouse' && handleOpen()}
                onPointerLeave={(event) => event.pointerType === 'mouse' && closeSoon()}
            >
                <ButtonBase
                    ref={anchorRef}
                    disableRipple
                    aria-haspopup="menu"
                    aria-expanded={open ? 'true' : undefined}
                    aria-controls={open ? menuId : undefined}
                    // detail === 0 → the click came from Enter/Space, not a pointer.
                    onClick={(event) => (open ? handleClose() : handleOpen(event.detail === 0))}
                    onKeyDown={(event) => {
                        if (event.key === 'ArrowDown') {
                            event.preventDefault();
                            handleOpen(true);
                        }
                    }}
                    sx={(theme) => ({
                        gap: 0.5,
                        fontFamily: theme.typography.fontFamily,
                        fontSize: 15,
                        fontWeight: active ? 700 : 500,
                        color: active || open ? onDark.text : onDark.textSecondary,
                        transition: theme.transitions.create('color', { duration: 150 }),
                        '&:hover': { color: onDark.text },
                    })}
                >
                    {item.title}
                    <Iconify
                        icon="mingcute:down-line"
                        width={16}
                        sx={(theme) => ({
                            transition: theme.transitions.create('transform', { duration: 150 }),
                            transform: open ? 'rotate(180deg)' : 'none',
                        })}
                    />
                </ButtonBase>

                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    placement="bottom-start"
                    transition
                    // Rendered inside the hover wrapper, so moving the mouse from the
                    // trigger onto the panel does not count as leaving it.
                    disablePortal
                    sx={{ zIndex: 1 }}
                >
                    {({ TransitionProps }) => (
                        <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
                            {/* Top padding bridges the gap below the trigger for the mouse. */}
                            <Box sx={{ pt: 2 }}>
                                <Box
                                    sx={{
                                        width: 340,
                                        p: 1,
                                        bgcolor: sand[900],
                                        border: `1px solid ${onDark.hairlineStrong}`,
                                        borderRadius: `${radii.lg}px`,
                                        boxShadow: softShadows.lg,
                                    }}
                                >
                                    <MenuList
                                        id={menuId}
                                        autoFocusItem={open && focusMenu}
                                        onKeyDown={handleMenuKeyDown}
                                        disablePadding
                                    >
                                        {item.children?.map((child) => {
                                            const childActive = isChildActive(child.path);

                                            return (
                                                <MenuItem
                                                    key={child.path}
                                                    component={RouterLink}
                                                    href={child.path}
                                                    onClick={handleClose}
                                                    aria-current={childActive ? 'page' : undefined}
                                                    sx={itemSx}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 700,
                                                            fontSize: 15,
                                                            color: childActive ? onDark.accent : onDark.text,
                                                        }}
                                                    >
                                                        {child.title}
                                                    </Typography>
                                                    {child.desc && (
                                                        <Typography
                                                            variant="body2"
                                                            sx={{ mt: 0.25, color: onDark.textSecondary }}
                                                        >
                                                            {child.desc}
                                                        </Typography>
                                                    )}
                                                </MenuItem>
                                            );
                                        })}

                                        <Divider sx={{ my: 1, borderColor: onDark.hairline }} />

                                        <MenuItem
                                            component={RouterLink}
                                            href={item.path}
                                            onClick={handleClose}
                                            sx={{
                                                ...itemSx,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.75,
                                                py: 1.25,
                                                fontSize: 14,
                                                fontWeight: 700,
                                                color: onDark.accent,
                                            }}
                                        >
                                            {allLabel}
                                            <Iconify icon="mingcute:right-line" width={16} />
                                        </MenuItem>
                                    </MenuList>
                                </Box>
                            </Box>
                        </Grow>
                    )}
                </Popper>
            </Box>
        </ClickAwayListener>
    );
}
