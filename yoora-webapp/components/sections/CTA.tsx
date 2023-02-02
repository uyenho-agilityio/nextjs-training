'use client';

// Libs
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Container, Box, GridItem, Grid } from '@chakra-ui/react';
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
          py={{ base: '72px', lg: '120px' }}
        >
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}>
            <GridItem colSpan={{ base: 1, lg: 3 }} zIndex={1}>
              <Title size="h1" mb={{ base: '16px', lg: '24px' }}>
                {CTA_CONTENT.TITLE}
              </Title>
              <Text size="md" maxW="600px" fontWeight="medium">
                {CTA_CONTENT.DESCRIPTION}
              </Text>
            </GridItem>

            <GridItem
              colSpan={{ base: 1, lg: 2 }}
              zIndex={1}
              mt={{ base: '220px', lg: '60px' }}
              pl={{ base: 0, lg: '40%' }}
              textAlign="center"
            >
              <Button size="md" rightIcon={<ChevronRightIcon ml="32px" />} mb="24px">
                {CTA_CONTENT.BUTTON}
              </Button>
              <Text size="xs" fontWeight="medium">
                {CTA_CONTENT.TEXT}
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CTASection;
