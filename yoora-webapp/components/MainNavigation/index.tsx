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
import { memo, useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { MENU, PAGE_ROUTES, ROUTE_LIST, STORAGE_KEYS, TEXT } from '@webapp/constants';

// Type
import { User } from '@webapp/models';

// Component
import { Button } from '@webapp/components';

// Util
import { getStorage } from '@webapp/utils';

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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const user = getStorage(STORAGE_KEYS.CURRENT_USER) as unknown as User;
    setCurrentUser(user);
  }, []);

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
              {ROUTE_LIST.map((route: { [key: string]: string }) => (
                <ChakraLink
                  as={Link}
                  key={route.path}
                  href={route.path}
                  color={pathname === route.path ? 'primary-btn-cl' : 'inherit'}
                >
                  {route.label}
                </ChakraLink>
              ))}

              <Divider />
              {isAuthenticated || currentUser?.email ? (
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