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

    // One schema for both layouts — matches the backend contract (name/email/projectInfo
    // required, company/phone optional). Keeping it single-source avoids the mini form
    // drifting out of sync with the API and silently failing validation.
    const schema = Yup.object().shape({
        name: Yup.string().required(`${t('nameRequired')}`),
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

    // Same fields in both layouts; `full` lays them out in a 2-column grid (contact page),
    // `mini` stacks them single-column to fit the narrow landing CTA card.
    const colSize = isFull ? { xs: 12, sm: 6 } : { xs: 12 };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={isFull ? 3 : 2.5}>
                {isFull && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {t('contact_form_note')}
                    </Typography>
                )}

                <Grid container spacing={2.5}>
                    <Grid size={colSize}>
                        <FieldLabel htmlFor="cf-name">{t('contact_name_label')}</FieldLabel>
                        <RHFTextField id="cf-name" name="name" placeholder={t('contact_name_placeholder')} />
                    </Grid>
                    <Grid size={colSize}>
                        <FieldLabel htmlFor="cf-company">{t('contact_company_label')}</FieldLabel>
                        <RHFTextField id="cf-company" name="company" placeholder={t('contact_company_placeholder')} />
                    </Grid>
                    <Grid size={colSize}>
                        <FieldLabel htmlFor="cf-email">{t('emailLabel')}</FieldLabel>
                        <RHFTextField id="cf-email" name="email" placeholder={t('emailPlaceholder')} />
                    </Grid>
                    <Grid size={colSize}>
                        <FieldLabel htmlFor="cf-phone">{t('contact_phone_label')}</FieldLabel>
                        <RHFTextField id="cf-phone" name="phone" placeholder={t('contact_phone_placeholder')} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <FieldLabel htmlFor="cf-project">{t('projectInfoLabel')}</FieldLabel>
                        <RHFTextField
                            id="cf-project"
                            name="projectInfo"
                            placeholder={t('projectInfoPlaceholder')}
                            multiline
                            rows={isFull ? 6 : 4}
                        />
                    </Grid>
                </Grid>

                {isFull ? (
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
                ) : (
                    <Button type="submit" variant="contained" color="secondary" size="large" fullWidth loading={isSubmitting}>
                        {t('contact_submit_label')}
                    </Button>
                )}

                {isFull ? (
                    recaptchaNotice
                ) : (
                    <Stack spacing={1} sx={{ textAlign: 'center' }}>
                        {privacyNotice}
                        {recaptchaNotice}
                    </Stack>
                )}
            </Stack>
        </FormProvider>
    );
}
