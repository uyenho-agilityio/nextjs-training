'use client';

// Lib
import { ChakraProvider, Box } from '@chakra-ui/react';

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
          <Box bg="primary-bg" pt={6}>
            <Header />
          </Box>
          <Box as="main">{children}</Box>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
