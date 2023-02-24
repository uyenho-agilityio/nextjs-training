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
  adjustFontFallback: 'Times New Roman',
  display: 'swap',
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
    md: '18px',
    lg: '20px',
    xl: '24px',
  },

  heading: {
    '2xs': '20px',
    xs: '24px',
    sm: '32px',
    md: '36px',
    lg: '48px',
    xl: '64px',
    '2xl': '72px',
  },
};

export const lineHeights = {
  text: {
    xs: '20px',
    sm: '22px',
    md: '24px',
    lg: '26px',
    xl: '28px',
    '2xl': '30px',
    '3xl': '34px',
    '4xl': '72px',
  },

  heading: {
    '2xs': '27px',
    xs: '34px',
    sm: '42px',
    md: '46px',
    lg: '58px',
    xl: '65px',
    '2xl': '74px',
  },
};

export const letterSpacings = {
  heading: {
    tighter: '-0.89px',
    tight: '-0.67px',
    normal: '-0.5px',
    wide: '-0.44px',
    wider: '-0.33px',
    widest: '0.38px',
  },
};
