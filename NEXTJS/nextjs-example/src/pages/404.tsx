import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

// Constant
import { TEXT, PAGE_404, PAGE_ROUTES } from 'src/constants';

// Model
import { NextPageWithLayout } from 'src/models';

// Layout
import { EmptyLayout } from 'src/layouts';

// Components
import { Title, Image } from 'src/components';

const NotFound: NextPageWithLayout = (): JSX.Element => {
  return (
    <Box>
      <Image {...PAGE_404} />
      {/* <Title color="red" size="lg">
          404 | PAGE NOT FOUND
        </Title> */}

      <Link href={PAGE_ROUTES.HOME}>
        <Title textAlign="center" size="lg" mt={10}>
          {TEXT.HEAD_BACK}
        </Title>
      </Link>
    </Box>
  );
};

NotFound.Layout = EmptyLayout;

export default NotFound;
