'use client';

import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import { sendContactFormToAdmin } from '@utils/email';

import { useTranslate } from '@base/locales';
import { useRecaptcha } from '@hooks/use-recaptcha';

import { RHFTextField } from '@components/hook-form';
import FormProvider from '@components/hook-form/form-provider';

import { ContactFormValues } from '@appTypes/contact-form';

// ----------------------------------------------------------------------

type Props = {
  variant?: 'mini' | 'full';
};

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
    return (
        <Typography
            component="label"
            htmlFor={htmlFor}
            sx={{
                display: 'block',
                mb: 0.75,
                fontSize: 13.5,
                fontWeight: 700,
                color: 'text.primary',
            }}
        >
            {children}
        </Typography>
    );
}

export default function ContactForm({ variant = 'mini' }: Props) {
    const { t } = useTranslate();
    const { executeRecaptcha } = useRecaptcha();

    const isFull = variant === 'full';

    const defaultValues: ContactFormValues = {
        name: '',
        company: '',
        email: '',
        phone: '',
        projectInfo: '',
    };

    const schema = Yup.object().shape({
        name: isFull ? Yup.string().required(`${t('nameRequired')}`) : Yup.string(),
        company: Yup.string(),
        email: Yup.string().required(`${t('emailRequired')}`).email(`${t('invalidEmailFormat')}`),
        phone: Yup.string(),
        projectInfo: Yup.string().required(`${t('projectInfoRequired')}`),
    });

    const methods = useForm<ContactFormValues>({
        // schema optionals (company/phone) widen yup's inferred type; the runtime shape matches.
        resolver: yupResolver(schema) as never,
        defaultValues,
    });

    const {
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = useCallback(
        async (data: ContactFormValues) => {
            try {
                const recaptchaToken = await executeRecaptcha('contact_form');
                await sendContactFormToAdmin({ data, recaptchaToken });
                reset();
                enqueueSnackbar(`${t('messageSuccessfullySent')}`, { variant: 'success' });
            } catch (error) {
                enqueueSnackbar(`${t('messageFailedToSend')}`, { variant: 'error' });
            }
        },
        [executeRecaptcha, reset, t]
    );

    const privacyNotice = (
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {t('contact_privacy_notice')}{' '}
            <Link component={RouterLink} href={paths.privacyPolicy} sx={{ color: 'primary.dark', fontWeight: 700 }}>
                {t('privacy_policy')}
            </Link>
            .
        </Typography>
    );

    // Google requires this disclosure when the reCAPTCHA badge is hidden (see css-baseline).
    const recaptchaNotice = (
        <Typography variant="caption" sx={{ display: 'block', color: 'text.disabled', lineHeight: 1.5 }}>
            {t('contact_recaptcha_notice')}{' '}
            <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.secondary', textDecoration: 'underline' }}
            >
                {t('contact_recaptcha_privacy')}
            </Link>{' '}
            {t('contact_recaptcha_and')}{' '}
            <Link
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.secondary', textDecoration: 'underline' }}
            >
                {t('contact_recaptcha_terms')}
            </Link>
            .
        </Typography>
    );

    // ---- MINI (landing CTA) ----
    if (!isFull) {
        return (
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2.5}>
                    <Box>
                        <FieldLabel htmlFor="cf-email">{t('contact_email_mini_label')}</FieldLabel>
                        <RHFTextField id="cf-email" name="email" placeholder={t('emailPlaceholder')} />
                    </Box>

                    <Box>
                        <FieldLabel htmlFor="cf-project">{t('contact_project_mini_label')}</FieldLabel>
                        <RHFTextField
                            id="cf-project"
                            name="projectInfo"
                            placeholder={t('projectInfoPlaceholder')}
                            multiline
                            rows={3}
                        />
                    </Box>

                    <Button type="submit" variant="contained" color="secondary" size="large" fullWidth loading={isSubmitting}>
                        {t('contact_submit_label')}
                    </Button>

                    <Stack spacing={1} sx={{ textAlign: 'center' }}>
                        {privacyNotice}
                        {recaptchaNotice}
                    </Stack>
                </Stack>
            </FormProvider>
        );
    }

    // ---- FULL (contact page) ----
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t('contact_form_note')}
                </Typography>

                <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FieldLabel htmlFor="cf-name">{t('contact_name_label')}</FieldLabel>
                        <RHFTextField id="cf-name" name="name" placeholder={t('contact_name_placeholder')} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FieldLabel htmlFor="cf-company">{t('contact_company_label')}</FieldLabel>
                        <RHFTextField id="cf-company" name="company" placeholder={t('contact_company_placeholder')} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FieldLabel htmlFor="cf-email-full">{t('emailLabel')}</FieldLabel>
                        <RHFTextField id="cf-email-full" name="email" placeholder={t('emailPlaceholder')} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FieldLabel htmlFor="cf-phone">{t('contact_phone_label')}</FieldLabel>
                        <RHFTextField id="cf-phone" name="phone" placeholder={t('contact_phone_placeholder')} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <FieldLabel htmlFor="cf-project-full">{t('projectInfoLabel')}</FieldLabel>
                        <RHFTextField
                            id="cf-project-full"
                            name="projectInfo"
                            placeholder={t('projectInfoPlaceholder')}
                            multiline
                            rows={6}
                        />
                    </Grid>
                </Grid>

                <Stack
                    direction={{ xs: 'column-reverse', sm: 'row' }}
                    spacing={2}
                    sx={{ alignItems: { sm: 'center' }, justifyContent: 'space-between' }}
                >
                    <Box sx={{ maxWidth: 320 }}>{privacyNotice}</Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        loading={isSubmitting}
                        sx={{ width: { xs: 1, sm: 'auto' }, flexShrink: 0 }}
                    >
                        {t('contact_submit_label')}
                    </Button>
                </Stack>

                {recaptchaNotice}
            </Stack>
        </FormProvider>
    );
}
