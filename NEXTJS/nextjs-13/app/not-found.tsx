'use client';

import { Box } from '@chakra-ui/react';
import Link from 'next/link';

// Constant
import { TEXT, PAGE_404, PAGE_ROUTES } from 'constants/index';

// Components
import { Title, Image } from 'components';

const NotFound = (): JSX.Element => {
  return (
    <Box>
      <Image {...PAGE_404} />

      <Link href={PAGE_ROUTES.HOME}>
        <Title textAlign="center" size="lg" mt={10}>
          {TEXT.HEAD_BACK}
        </Title>
      </Link>
    </Box>
  );
};

export default NotFound;
