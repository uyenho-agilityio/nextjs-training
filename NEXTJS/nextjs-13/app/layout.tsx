'use client';

import { ChakraProvider, Container, Box } from '@chakra-ui/react';

import Head from './head';

import { CHAKRA_THEME } from 'themes/chakra';

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <head />
      <body>
        <ChakraProvider theme={CHAKRA_THEME}>
          {/* <ColorModeScript initialColorMode={CHAKRA_THEME.config.initialColorMode} /> */}
          <Container>
            {/* <Header /> */}
            <Box as="main">{children}</Box>
            {/* <Footer /> */}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
