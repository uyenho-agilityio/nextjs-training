import { extendTheme } from '@chakra-ui/react';
import { NextFont } from '@next/font/dist/types';
import { Nunito, Poppins } from '@next/font/google';

import * as components from 'themes/components';
import * as customTheme from 'themes';

// FIXME: error when running storybook with @next/font
const nunito: NextFont = Nunito({ weight: ['400', '500', '700'] });
const poppins: NextFont = Poppins({ weight: ['400', '500', '700'] });

export const CHAKRA_THEME = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },

  fonts: {
    // googleFont
    heading: `${nunito.style.fontFamily}, sans-serif`,
    body: `${nunito.style.fontFamily}, sans-serif`,
    subBody: `${poppins.style.fontFamily}, sans-serif`,
    // localFont
    // heading: `${customTheme.mainFont.style.fontFamily}, sans-serif`,
    // body: `${customTheme.mainFont.style.fontFamily}, sans-serif`,
    // subBody: `${customTheme.subFont.style.fontFamily}, sans-serif`,
  },

  components: { ...components },

  ...customTheme,
});
