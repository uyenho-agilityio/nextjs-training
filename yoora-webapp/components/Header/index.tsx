'use client';

// Libs
import { Container, Link as ChakraLink, Flex, Box, ButtonGroup } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';

// Constants
import { LOGO, PAGE_ROUTES, ROUTE_LIST, TEXT } from '@webapp/constants';

// Component
import { Button } from '@webapp/components';

// Hook
import { useAuth } from '@webapp/hooks';

const MainNavigation = dynamic(() => import('@webapp/components').then(mod => mod.MainNavigation), {
  ssr: false,
});

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, handleLogOut } = useAuth();

  const handleLogIn = useCallback(() => {
    router.push(PAGE_ROUTES.LOGIN);
  }, []);

  return (
    <Container as="header" className="header">
      <Flex minWidth="max-content">
        <Box cursor="pointer" mr={{ base: 'auto', lg: '90px' }}>
          <ChakraLink as={Link} href={PAGE_ROUTES.HOME} prefetch={false}>
            <Image {...LOGO} priority />
          </ChakraLink>
        </Box>

        <MainNavigation display={{ base: 'block', lg: 'none' }} />

        <Box display={{ base: 'none', lg: 'block' }} mr="auto">
          {ROUTE_LIST.map((route: { [key: string]: string }) => {
            const { path, label } = route;

            return (
              <ChakraLink
                as={Link}
                key={path}
                href={path}
                fontWeight="bold"
                color={pathname === path ? 'primary-btn-cl' : 'inherit'}
                pr={10}
                prefetch={false}
              >
                {label}
              </ChakraLink>
            );
          })}
        </Box>

        <ButtonGroup display={{ base: 'none', lg: 'block' }}>
          {isAuthenticated ? (
            <Button onClick={handleLogOut}>{TEXT.LOGOUT}</Button>
          ) : (
            <Button onClick={handleLogIn}>{TEXT.LOGIN}</Button>
          )}
          <Button size="sm" variant="info">
            {TEXT.TRY_FOR_FREE}
          </Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};

export default Header;
