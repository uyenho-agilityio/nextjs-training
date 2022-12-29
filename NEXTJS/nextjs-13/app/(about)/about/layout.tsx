'use client';

import { ChakraProvider, Container, Box } from '@chakra-ui/react';

import { CHAKRA_THEME } from 'themes/chakra';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={CHAKRA_THEME}>
          <Container variant="center">
            <Box as="main">{children}</Box>
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default Layout;
