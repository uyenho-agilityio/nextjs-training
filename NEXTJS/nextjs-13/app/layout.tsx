'use client';

// Lib
import { ChakraProvider, Container, Box } from '@chakra-ui/react';

// themes
import { CHAKRA_THEME } from 'themes/chakra';

// Components
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
      <head />

      <body>
        <ChakraProvider theme={CHAKRA_THEME}>
          {/* <ColorModeScript initialColorMode={CHAKRA_THEME.config.initialColorMode} /> */}
          <ErrorBoundary>
            <Container my={5}>
              <Header />
              <Box as="main" my={10}>
                {children}
              </Box>
              <Footer />
            </Container>
          </ErrorBoundary>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
