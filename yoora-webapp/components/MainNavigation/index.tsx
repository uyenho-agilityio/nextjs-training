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
import { memo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { MENU, ROUTE_LIST, TEXT } from '@webapp/constants';

// Component
import { Button } from '@webapp/components';

type MainNavigationProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
} & BoxProps;

const MainNavigationBase = ({ size = 'xs', ...props }: MainNavigationProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

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
              <Button size="sm" variant="solid">
                {TEXT.LOGIN}
              </Button>
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
