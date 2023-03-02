'use client';

// Libs
import { Container, Box } from '@chakra-ui/react';
import Image from 'next/image';

// Constant
import { DETAILS_CONTENT } from '@webapp/constants';

// Components
import { BannerCard } from '@webapp/components';

const BannerSection = (): JSX.Element => {
  return (
    <>
      {/* Mobile */}
      <Box bg="primary-bg" display={{ lg: 'none' }}>
        <Container size="md">
          <BannerCard {...DETAILS_CONTENT} />

          <Image
            {...DETAILS_CONTENT.image}
            placeholder="blur"
            blurDataURL={DETAILS_CONTENT.image.src}
            sizes="(min-width: 320px) 100vw, 173px, (min-width: 768px) 100vw, 342px, (min-width: 1440px) 100vw, 511px"
            loading="eager"
          />
        </Container>
      </Box>

      {/* Desktop */}
      <Box bg="primary-bg" display={{ base: 'none', lg: 'block' }}>
        <Container size="md">
          <BannerCard {...DETAILS_CONTENT} />
        </Container>

        <Box display="flex" justifyContent="center">
          <Image
            {...DETAILS_CONTENT.image}
            placeholder="blur"
            blurDataURL={DETAILS_CONTENT.image.src}
            sizes="(min-width: 320px) 100vw, 173px, (min-width: 768px) 100vw, 342px, (min-width: 1440px) 100vw, 511px"
            loading="eager"
          />
        </Box>
      </Box>
    </>
  );
};

export default BannerSection;
