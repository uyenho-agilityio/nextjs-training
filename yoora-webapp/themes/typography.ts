import { NextFont } from '@next/font/dist/types';
import localFont from '@next/font/local';

export const mainFont: NextFont = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },

    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

export const fontSizes = {
  text: {
    xs: '14px',
    sm: '16px',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },

  heading: {
    xs: '24px',
    sm: '36px',
    md: '48px',
    lg: '64px',
    xl: '72px',
  },
};

export const lineHeights = {
  text: {
    xs: '20px',
    sm: '22px',
    md: '24px',
    lg: '34px',
    xl: '72px',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },

  heading: {
    xs: '34px',
    sm: '46px',
    md: '58px',
    lg: '65px',
    xl: '74px',
  },
};
