'use client';

// Libs
import { ChakraProvider } from '@chakra-ui/react';

// Theme
import { CHAKRA_THEME } from '@webapp/themes/chakra';

// Provider
import { AppProvider } from '@webapp/contexts/AppContext';

const AuthLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={CHAKRA_THEME}>
          <AppProvider>{children}</AppProvider>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
