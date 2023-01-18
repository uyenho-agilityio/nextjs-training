'use client';

// Libs
import { Container, Link as ChakraLink, Flex, Box, ButtonGroup } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Constants
import { LOGO, ROUTE_LIST, TEXT } from '@webapp/constants';

// Components
import { Button } from '@webapp/components';
const MainNavigation = dynamic(() => import('@webapp/components').then(mod => mod.MainNavigation), {
  ssr: false,
});

const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <Container as="header" className="header">
      <Flex minWidth="max-content">
        <Box cursor="pointer" mr={{ base: 'auto', lg: '90px' }}>
          <ChakraLink as={Link} href="/">
            <Image {...LOGO} priority />
          </ChakraLink>
        </Box>

        <MainNavigation display={{ base: 'block', lg: 'none' }} />

        <Box display={{ base: 'none', lg: 'block' }} mr="auto">
          {ROUTE_LIST.map((route: { [key: string]: string }) => (
            <ChakraLink
              as={Link}
              key={route.path}
              href={route.path}
              fontWeight="bold"
              color={pathname === route.path ? 'primary-btn-cl' : 'inherit'}
              pr={10}
            >
              {route.label}
            </ChakraLink>
          ))}
        </Box>

        <ButtonGroup display={{ base: 'none', lg: 'block' }}>
          <Button>{TEXT.LOGIN}</Button>
          <Button size="sm" variant="info">
            {TEXT.TRY_FOR_FREE}
          </Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};

export default Header;
