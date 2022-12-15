import { Flex, Spacer } from '@chakra-ui/react';
import Link from 'next/link';

// Constant
import { COURSE_LOGO, AVATAR } from 'src/constants';

// Component
import { Image } from 'src/components';

const Header = (): JSX.Element => {
  return (
    <Flex as="header" align="center">
      <Link href="/">
        <Image {...COURSE_LOGO} cursor="pointer" />
      </Link>
      <Spacer />
      <Link href="/about">
        <Image {...AVATAR} borderRadius="full" />
      </Link>
    </Flex>
  );
};

export default Header;
