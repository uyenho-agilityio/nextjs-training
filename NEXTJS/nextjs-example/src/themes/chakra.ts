import { extendTheme } from '@chakra-ui/react';

import { breakpoints, colors, styles, textStyles } from 'src/themes';
import { Button, Container, Heading } from 'src/themes/components';

export const CHAKRA_THEME = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },

  fonts: {
    heading: 'Nunito, sans-serif',
    body: 'Nunito, sans-serif',
    subBody: 'Ubuntu, sans-serif',
  },

  components: {
    Button,
    Container,
    Heading,
  },

  breakpoints,
  colors,
  styles,
  textStyles,
});
