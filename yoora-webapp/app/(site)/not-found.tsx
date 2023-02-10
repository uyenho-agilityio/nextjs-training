'use client';

// Libs
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { TEXT, PAGE_404, PAGE_ROUTES } from '@webapp/constants';

// Components
import { Flex, Title } from '@webapp/components';

const NotFound = (): JSX.Element => {
  return (
    <Flex variant="column">
      <Image {...PAGE_404} priority />

      <Link href={PAGE_ROUTES.HOME}>
        <Title textAlign="center" size="lg" mt={10}>
          {TEXT.HEAD_BACK}
        </Title>
      </Link>
    </Flex>
  );
};

export default NotFound;
