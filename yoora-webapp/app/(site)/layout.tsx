'use client';

// Libs
import { Box, ChakraProvider, Container } from '@chakra-ui/react';

// Theme
import { CHAKRA_THEME } from '@webapp/themes/chakra';

// Components
import { Header, Footer } from '@webapp/components';

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={CHAKRA_THEME}>
          <Container my={6}>
            <Header />
            <Box as="main">{children}</Box>
            <Footer />
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
