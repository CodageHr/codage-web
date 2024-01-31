import { paths } from 'src/routes/paths';

// API
// ----------------------------------------------------------------------

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Codage';
export const APP_HOST = process.env.NEXT_APP_HOST || 'https://codage.hr';
export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;
export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API;


export const FIREBASE_API = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const AMPLIFY_API = {
    userPoolId: process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_WEB_CLIENT_ID,
    region: process.env.NEXT_PUBLIC_AWS_AMPLIFY_REGION,
};

export const AUTH0_API = {
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    callbackUrl: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL,
};

export const SUPABASE_API = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
};

export const MAPBOX_API = process.env.NEXT_PUBLIC_MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'

export const CONTACT_CARD_ID= 'contact-card';

export const MAILJET_CREDENTIALS = {
    MAILJET_PUBLIC_KEY: process.env.MAILJET_API_PUBLIC_KEY || '6a46f25cb026d7c09946557e81a48b93',
    MAILJET_PRIVATE_KEY: process.env.MAILJET_API_PRIVATE_KEY || '111099e28e0ad7074c3dee591f186e3a'
}

export const EMAIL_SENDER_ADDRESS = process.env.EMAIL_SENDER_ADDRESS || 'no-reply@codage.hr'
export const EMAIL_SENDER_NAME = process.env.EMAIL_SENDER_NAME || 'Codage'
export const ADMIN_EMAIL_ADDRESS = process.env.ADMIN_EMAIL_ADDRESS || 'admin@codage.hr'
