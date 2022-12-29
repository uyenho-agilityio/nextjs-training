'use client';

import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { PAGE_ROUTES, TEXT } from 'constants/index';

const AboutPage = (): JSX.Element => {
  return (
    <>
      <Box textStyle="title" mb={10}>
        About Page
      </Box>
      <Box textTransform="uppercase" color="red" textAlign="center">
        <Link as={NextLink} href={PAGE_ROUTES.HOME}>
          {TEXT.BACK_HOME}
        </Link>
      </Box>
    </>
  );
};

export default AboutPage;
