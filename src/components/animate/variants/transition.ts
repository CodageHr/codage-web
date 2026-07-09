import { cubicBezier } from 'framer-motion';

import { EaseType, TranExitType, TranHoverType, TranEnterType } from '../types';

// ----------------------------------------------------------------------

export const varTranHover = (props?: TranHoverType) => {

    const duration = props?.duration || 0.32;
    const ease = getEase(props?.ease);

    return { duration, ease };

};

export const varTranEnter = (props?: TranEnterType) => {

    const duration = props?.durationIn || 0.64;
    const ease = getEase(props?.easeIn);

    return { duration, ease };

};

export const varTranExit = (props?: TranExitType) => {

    const duration = props?.durationOut || 0.48;
    const ease = getEase(props?.easeOut);

    return { duration, ease };

};

const getEase = (easeProp?: EaseType) => {

    let ease;

    if (typeof easeProp === 'string') {

        ease = easeProp; // npr. 'easeInOut'

    } else if (Array.isArray(easeProp)) {

        ease = cubicBezier(...easeProp); // [0.43, 0.13, 0.23, 0.96]

    } else {

        ease = cubicBezier(0.43, 0.13, 0.23, 0.96); // default

    }

    return ease;

};
