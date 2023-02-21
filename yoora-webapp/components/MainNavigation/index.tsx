'use client';

// Libs
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  BoxProps,
  Link as ChakraLink,
  Divider,
} from '@chakra-ui/react';
import { memo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { MENU, PAGE_ROUTES, ROUTE_LIST, TEXT } from '@webapp/constants';

// Component
import { Button } from '@webapp/components';

// Hook
import { useAuth } from '@webapp/hooks';

type MainNavigationProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
} & BoxProps;

const MainNavigationBase = ({ size = 'xs', ...props }: MainNavigationProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, handleLogOut } = useAuth();

  const handleLogIn = useCallback(() => {
    router.push(PAGE_ROUTES.LOGIN);
  }, []);

  return (
    <Box {...props}>
      <Image {...MENU} priority onClick={() => onOpen()} />

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box display="flex" flexDirection="column" gap={5}>
              {ROUTE_LIST.map((route: { [key: string]: string }) => {
                const { path, label } = route;

                return (
                  <ChakraLink
                    as={Link}
                    key={path}
                    href={path}
                    color={pathname === path ? 'primary-btn-cl' : 'inherit'}
                  >
                    {label}
                  </ChakraLink>
                );
              })}

              <Divider />
              {isAuthenticated ? (
                <Button size="sm" variant="solid" onClick={handleLogOut}>
                  {TEXT.LOGOUT}
                </Button>
              ) : (
                <Button onClick={handleLogIn}>{TEXT.LOGIN}</Button>
              )}
              <Button size="sm" variant="info">
                {TEXT.TRY_FOR_FREE}
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const MainNavigation = memo(MainNavigationBase);

export default MainNavigation;
