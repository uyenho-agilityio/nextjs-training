'use client';

// Libs
import { Container, Link as ChakraLink, Flex, Box, ButtonGroup } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';

// Constants
import { LOGO, PAGE_ROUTES, ROUTE_LIST, STORAGE_KEYS, TEXT } from '@webapp/constants';

// Type
import { User } from '@webapp/models';

// Component
import { Button } from '@webapp/components';

// Hook
import { useAuth } from '@webapp/hooks';

// Util
import { getStorage } from '@webapp/utils';

const MainNavigation = dynamic(() => import('@webapp/components').then(mod => mod.MainNavigation), {
  ssr: false,
});

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, handleLogOut } = useAuth();

  const currentUser =
    typeof window !== 'undefined'
      ? (getStorage(STORAGE_KEYS.CURRENT_USER) as unknown as User)
      : null;

  const handleLogIn = useCallback(() => {
    router.push(PAGE_ROUTES.LOGIN);
  }, [router]);

  return (
    <Container as="header" className="header">
      <Flex minWidth="max-content">
        <Box cursor="pointer" mr={{ base: 'auto', lg: '90px' }}>
          <ChakraLink as={Link} href={PAGE_ROUTES.HOME}>
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
          {isAuthenticated || currentUser?.email ? (
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
