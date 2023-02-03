'use client';

// Lib
import { ChakraProvider, Box } from '@chakra-ui/react';

// Theme
import { CHAKRA_THEME } from '@webapp/themes/chakra';

// Components
import { AuthGuard, Header, Footer } from '@webapp/components';

// Provider
import { AppProvider } from '@webapp/contexts/AppContext';

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={CHAKRA_THEME}>
          <AppProvider>
            <AuthGuard>
              <Box bg="primary-bg" pt={6}>
                <Header />
              </Box>
              <Box as="main">{children}</Box>
              <Footer />
            </AuthGuard>
          </AppProvider>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
