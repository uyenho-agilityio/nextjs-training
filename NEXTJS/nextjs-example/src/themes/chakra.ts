import { extendTheme } from '@chakra-ui/react';

import * as components from 'src/themes/components';
import * as customTheme from 'src/themes';

export const CHAKRA_THEME = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },

  fonts: {
    // heading: 'Nunito, sans-serif', install @fontsource/ubuntu
    // body: 'Nunito, sans-serif',
    // subBody: 'Ubuntu, sans-serif', install @fontsource/ubuntu
    heading: `'main', sans-serif`,
    body: `'main', sans-serif`,
    subBody: `'sub', sans-serif`,
  },

  components: { ...components },

  ...customTheme,
});
