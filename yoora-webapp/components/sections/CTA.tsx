'use client';

// Libs
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Container, Box } from '@chakra-ui/react';
import Image from 'next/image';

// Constant
import { CTA_CONTENT } from '@webapp/constants';

// Components
import { Text, Title, Button } from '@webapp/components';

const CTASection = (): JSX.Element => {
  return (
    <>
      <Box
        as="section"
        className="cta-section"
        pos="relative"
        maxW="100%"
        h={{ base: '725px', lg: '468px' }}
        color="secondary-cl"
      >
        {/* Mobile */}
        <Box display={{ lg: 'none' }}>
          <Image
            {...CTA_CONTENT.BG_IMAGE.MOBILE}
            placeholder="blur"
            blurDataURL={CTA_CONTENT.BG_IMAGE.MOBILE.src}
            sizes="100vw"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* Desktop */}
        <Box display={{ base: 'none', lg: 'block' }}>
          <Image
            {...CTA_CONTENT.BG_IMAGE.DESKTOP}
            placeholder="blur"
            blurDataURL={CTA_CONTENT.BG_IMAGE.DESKTOP.src}
            sizes="100vw"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>

        <Container
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          py={{ base: '90px', lg: '140px' }}
        >
          <Box zIndex={1}>
            <Title w={{ lg: '60%' }} mb="20px">
              {CTA_CONTENT.TITLE}
            </Title>
            <Text w={{ lg: '50%' }}>{CTA_CONTENT.DESCRIPTION}</Text>
          </Box>

          <Box zIndex={1} mt={{ base: '300px', lg: '50px' }} textAlign="center">
            <Button size="lg" rightIcon={<ChevronRightIcon />} mb="20px">
              {CTA_CONTENT.BUTTON}
            </Button>
            <Text>{CTA_CONTENT.TEXT}</Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CTASection;
