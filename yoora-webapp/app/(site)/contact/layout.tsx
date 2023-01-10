'use client';

// Lib
import { Box } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <Box as="main">{children}</Box>;
};

export default Layout;
