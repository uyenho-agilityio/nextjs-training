'use client';

// Libs
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { TEXT, PAGE_404, PAGE_ROUTES } from '@webapp/constants';

// Component
import { Title } from '@webapp/components';

const NotFound = (): JSX.Element => {
  return (
    <Flex align="center" direction="column">
      <Image
        {...PAGE_404}
        priority
        // sizes="(min-width: 60em) 24vw,
        //             (min-width: 28em) 45vw,
        //             100vw"
      />

      <Link href={PAGE_ROUTES.HOME}>
        <Title textAlign="center" size="lg" mt={10}>
          {TEXT.HEAD_BACK}
        </Title>
      </Link>
    </Flex>
  );
};

export default NotFound;
