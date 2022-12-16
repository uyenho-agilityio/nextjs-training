import { Link as ChakraLink, Flex, Wrap, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Constant
import { COURSE_LOGO, ROUTE_LIST } from 'src/constants';

// Component
import { Image } from 'src/components';

const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <Flex as="header" align="center">
      <Link href="/">
        <Image {...COURSE_LOGO} cursor="pointer" />
      </Link>
      <Spacer />
      <Wrap justify={{ base: 'center', md: 'flex-start' }} spacing={{ base: '10px', md: '20px' }}>
        {ROUTE_LIST.map((route: { [key: string]: string }) => (
          // < Next13
          // <Link key={route.path} href={route.path} passHref>
          //   <ChakraLink color={router.pathname === route.path ? 'secondary-cl' : 'inherit'}>
          //     {route.label}
          //   </ChakraLink>
          // </Link>

          // Next13
          <ChakraLink
            as={Link}
            key={route.path}
            href={route.path}
            fontWeight="bold"
            color={router.pathname === route.path ? 'secondary-cl' : 'inherit'}
          >
            {route.label}
          </ChakraLink>
        ))}
      </Wrap>
    </Flex>
  );
};

export default Header;
