'use client';

import { ChakraProvider, Container, Box } from '@chakra-ui/react';

import Head from './head';

import { CHAKRA_THEME } from 'themes/chakra';
import { SEO_DATA } from 'constants/index';
import { ErrorBoundary, Footer, Header } from 'components';

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
      <Head data={SEO_DATA} />
      <head />
      <body>
        <ChakraProvider theme={CHAKRA_THEME}>
          {/* <ColorModeScript initialColorMode={CHAKRA_THEME.config.initialColorMode} /> */}
          <ErrorBoundary>
            <Container my={5}>
              <Header />
              <Box as="main">{children}</Box>
              <Footer />
            </Container>
          </ErrorBoundary>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
