'use client';

// Libs
import { Container, Box } from '@chakra-ui/react';
import Image from 'next/image';

// Constant
import { DETAILS_CONTENT } from '@webapp/constants';

// Components
import { BannerCard } from '@webapp/components';

const BannerSection: React.FC = (): JSX.Element => {
  return (
    <Box bg="primary-bg">
      <Container size="md">
        <BannerCard {...DETAILS_CONTENT} />
      </Container>

      <Box display="flex" justifyContent="center">
        <Image {...DETAILS_CONTENT.image} />
      </Box>
    </Box>
  );
};

export default BannerSection;
