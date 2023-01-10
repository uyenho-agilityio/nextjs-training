'use client';

// Libs
import { ChakraProvider } from '@chakra-ui/react';

// Theme
import { CHAKRA_THEME } from '@webapp/themes/chakra';

const AuthLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={CHAKRA_THEME}>
          Login Form
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
