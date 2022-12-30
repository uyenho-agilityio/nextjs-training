import { Link as ChakraLink, Flex, Wrap, Spacer, Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { LOGO, ROUTE_LIST } from '@webapp/constants';

const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <Flex as="header" align="center">
      <Box cursor="pointer">
        <Link href="/">
          <Image {...LOGO} priority />
        </Link>
      </Box>
      <Spacer />
      <Wrap justify={{ base: 'center', md: 'flex-start' }} spacing={{ base: '10px', md: '20px' }}>
        {ROUTE_LIST.map((route: { [key: string]: string }) => (
          <ChakraLink
            as={Link}
            key={route.path}
            href={route.path}
            fontWeight="bold"
            color={pathname === route.path ? 'secondary-cl' : 'inherit'}
          >
            {route.label}
          </ChakraLink>
        ))}
      </Wrap>
    </Flex>
  );
};

export default Header;
