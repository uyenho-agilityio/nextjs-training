import { extendTheme } from '@chakra-ui/react';

import * as components from '@webapp/themes/components';
import * as customTheme from '@webapp/themes';

export const CHAKRA_THEME = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },

  fonts: {
    heading: `${customTheme.mainFont.style.fontFamily}, sans-serif`,
    body: `${customTheme.mainFont.style.fontFamily}, sans-serif`,
  },

  components: { ...components },

  ...customTheme,
});
