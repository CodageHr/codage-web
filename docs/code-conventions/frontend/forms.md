# Forms

Forms use **react-hook-form** + **Yup**, wired through the helpers in
`src/components/hook-form/`.

## Pattern

```tsx
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFTextField } from '@components/hook-form';

const Schema = Yup.object({
    email: Yup.string().required().email(),
    message: Yup.string().required(),
});

type FormValues = Yup.InferType<typeof Schema>;

const methods = useForm<FormValues>({ resolver: yupResolver(Schema), defaultValues });

const onSubmit = methods.handleSubmit(async (data) => { /* … */ });

return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField name="email" label={translate('email')} />
        <RHFTextField name="message" label={translate('message')} multiline rows={4} />
        <Button type="submit" variant="contained" loading={methods.formState.isSubmitting}>
            {translate('send')}
        </Button>
    </FormProvider>
);
```

## Rules

- Always wrap fields in `FormProvider` (`components/hook-form/form-provider.tsx`) —
  it provides the RHF context and the `<form>` element.
- Derive the values type from the schema with `Yup.InferType` — do not hand-write it.
- Use the prebuilt wrappers instead of raw MUI inputs; validation errors surface
  automatically via `helperText`:

  `RHFTextField` · `RHFSelect` · `RHFCheckbox` · `RHFSwitch` · `RHFRadioGroup`
  · `RHFAutocomplete` · `RHFSlider` · `RHFUpload` · `RHFCode`

- Submit buttons show progress with MUI 7's `<Button loading>` (not `@mui/lab`).
- Label/placeholder text must come from i18n keys (see [i18n](i18n.md)).
