// eslint-disable-next-line import/no-extraneous-dependencies
import { ContactFormValues } from '@appTypes/contact-form';

import { axiosBackendInstance } from '@utils/axios';

type ISendContactFormEmail = {
    data: ContactFormValues
}

export async function sendContactFormToAdmin({ data }: ISendContactFormEmail) {

    await axiosBackendInstance.post('/contact-form', data);
}
