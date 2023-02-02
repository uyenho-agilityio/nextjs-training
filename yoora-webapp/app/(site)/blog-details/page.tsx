'use client';

// Libs
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

// Components
import { BannerSection, DetailsSection, MoreTopicsSection } from '@webapp/components';

const Page: NextPage = (): JSX.Element => {
  return (
    <>
      <BannerSection />
      <DetailsSection />
      <Box bg="primary-bg">
        <MoreTopicsSection />
      </Box>
    </>
  );
};

export default Page;
