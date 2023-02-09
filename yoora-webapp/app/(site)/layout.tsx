'use client';

// Libs
import { ChakraProvider, Box } from '@chakra-ui/react';
import { SWRConfig, preload } from 'swr';

// Theme
import { CHAKRA_THEME } from '@webapp/themes/chakra';

// Components
import { Header, Footer } from '@webapp/components';

// Provider
import { AppProvider } from '@webapp/contexts/AppContext';

// Type
import { ToastStatus } from '@webapp/types';

// Service
import { fetcher, URL } from '@webapp/services';

// Util
import { showToast } from '@webapp/utils';

// Preload the resource before rendering component
preload(URL, fetcher);

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <head />
      <body>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            shouldRetryOnError: false,
            fetcher,
            onError: error => {
              showToast(error.message as string, ToastStatus.Error);
            },
          }}
        >
          <ChakraProvider theme={CHAKRA_THEME}>
            <AppProvider>
              <Box bg="primary-bg" pt={6}>
                <Header />
              </Box>
              <Box as="main">{children}</Box>
              <Footer />
            </AppProvider>
          </ChakraProvider>
        </SWRConfig>
      </body>
    </html>
  );
};

export default RootLayout;
