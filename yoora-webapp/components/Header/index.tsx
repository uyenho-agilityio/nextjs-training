'use client';

// Libs
import { Link as ChakraLink, Flex, Box, ButtonGroup } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { LOGO, ROUTE_LIST, TEXT } from '@webapp/constants';

// Components
import { Button, MainNavigation } from '@webapp/components';

const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <Flex as="header" alignItems="center" minWidth="max-content">
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

      <ButtonGroup display={{ base: 'none', lg: 'block' }} gap={4}>
        <Button text={TEXT.LOGIN} />
        <Button text={TEXT.TRY_FOR_FREE} size="sm" variant="info" />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
