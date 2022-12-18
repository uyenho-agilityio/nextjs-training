import { extendTheme } from '@chakra-ui/react';

import { breakpoints, colors, styles, textStyles, space, sizes } from 'src/themes';
import { Button, Card, Container, Heading } from 'src/themes/components';

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
    Card,
    Container,
    Heading,
  },

  breakpoints,
  colors,
  styles,
  textStyles,
  space,
  sizes,
});
