import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import { CHAKRA_THEME } from '../src/themes/chakra';

import * as NextImage from 'next/image';
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  Story => (
    <ChakraProvider theme={CHAKRA_THEME}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  layout: 'centered',
};
