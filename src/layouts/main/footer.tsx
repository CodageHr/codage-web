import { TFunction } from 'i18next';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { usePathname } from '@routes/hooks';
import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';

import Logo from '@components/logo';
import Iconify from '@components/iconify';
import WorkingHoursSchedule from '@components/working-hours-schedule';

// ----------------------------------------------------------------------

const LINKS = (translate: TFunction) => ([
    {
        headline: translate('appMenu'),
        children: [
            { name: translate('home'), href: paths.home, icon:undefined }
            /*  { name: translate('services'), href: paths.services, icon:undefined },
            { name: translate('aboutUs'), href: paths.about, icon:undefined },
            { name: translate('contact'), href: paths.contact, icon:undefined }, */
        ],
    },
    {
        headline: translate('contact'),
        children: [
            { name: 'kontakt@codage.hr', href: 'mailto:kontakt@codage.hr', icon: 'fa6-solid:envelope' },
            { name: '+385 98 403 330', href: 'tel:+38598403330', icon: 'ic:round-phone' }
        ]
    },
]);

// ----------------------------------------------------------------------

export default function Footer() {

    const pathname = usePathname();

    const { translate } = useTranslate();

    const currentYear = new Date().getFullYear();

    const homePage = pathname === '/';

    const simpleFooter = (
        <Box
            component="footer"
            sx={{
                py: 5,
                textAlign: 'center',
                position: 'relative',
                bgcolor: 'background.default',
            }}
        >
            <Container>
                <Grid container alignItems={'center'}  spacing={2}>
                    <Grid >
                        <Logo />
                    </Grid>

                </Grid>

                <Typography variant="caption" component="div">
          © {currentYear}. {translate('allRightsReserved')} by Codage d.o.o.
                </Typography>
            </Container>
        </Box>
    );

    const mainFooter = (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                bgcolor: 'background.default',
            }}
        >
            <Divider />

            <Container
                sx={{
                    pt: 10,
                    pb: 5,
                    textAlign: { xs: 'center', md: 'unset' },
                }}
            >
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent={{
                        xs: 'center',
                        md:'flex-start'
                    }}
                    spacing={2}
                >
                    <Grid >
                        <Logo />
                    </Grid>

                </Grid>

                <Grid
                    container
                    justifyContent={{
                        xs: 'center',
                        md: 'space-between',
                    }}
                >
                    {/* <Grid xs={8} md={3} mt={4}>
            <Stack>
              <Typography variant={'subtitle1'}>{translate('socialNetworks')}</Typography>
              <Stack
                direction="row"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{
                  mb: { xs: 5, md: 0 },
                }}
              >
                {_socials.map((social) => (
                  <IconButton
                    key={social.name}
                    href={social.path}
                    target="_blank"
                    rel="noopener"
                    component={Link}
                    aria-label={`${social.name} stranica`}
                    sx={{
                      '&:hover': {
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    <Iconify color={social.color} icon={social.icon} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>

          </Grid> */}
                    <Grid xs={8} md={3} mt={4}>
                        <WorkingHoursSchedule />
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
                            {LINKS(translate).map((list) => (
                                <Stack
                                    key={list.headline}
                                    spacing={2}
                                    alignItems={{ xs: 'center', md: 'flex-start' }}
                                    sx={{ width: 1 }}
                                >
                                    <Typography component="div" variant="overline">
                                        {list.headline}
                                    </Typography>

                                    {list.children.map((link) => (
                                        <Link
                                            key={link.name}
                                            component={RouterLink}
                                            href={link.href}
                                            color="inherit"
                                            variant="body2"
                                            sx={{
                                                display: 'flex',
                                                columnGap: 2,
                                                alignItems: 'center'
                                            }}

                                        >
                                            {link.icon && <Iconify width={'1rem'} icon={link?.icon} sx={{ color:'primary.main' }}  />}
                                            {link.name}
                                        </Link>
                                    ))}
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Typography variant="body2" sx={{ mt: 10 }}>
          © {currentYear}. {translate('allRightsReserved')}
                </Typography>
            </Container>
        </Box>
    );

    return homePage ? simpleFooter : mainFooter;

}
