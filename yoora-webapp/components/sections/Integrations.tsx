'use client';

// Libs
import { Container, Box, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import Image from 'next/image';

// Constant
import { INTEGRATIONS_CONTENT } from '@webapp/constants';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Text, Title } from '@webapp/components';

const IntegrationsSection = (): JSX.Element => {
  return (
    <Container as="section" className="integrations-section">
      <Box textAlign="center" pt={{ base: '42px', lg: '72px' }}>
        <Title mb="24px">{INTEGRATIONS_CONTENT.TITLE}</Title>
        <Text mb={{ base: '32px', lg: '64px' }}>{INTEGRATIONS_CONTENT.DESCRIPTION}</Text>
      </Box>

      {/* Desktop */}
      <Wrap display={{ base: 'none', lg: 'block' }}>
        {INTEGRATIONS_CONTENT.IMAGES_DESKTOP.map(
          (item: ImageProps): JSX.Element => (
            <WrapItem key={item.src}>
              <Image
                {...item}
                placeholder="blur"
                blurDataURL={item.src}
                sizes="(min-width: 320px) 100vw, 78px, (min-width: 768px) 100vw, 99px, (min-width: 1440px) 100vw, 120px"
              />
            </WrapItem>
          ),
        )}
      </Wrap>

      {/* Mobile */}
      <Wrap display={{ lg: 'none' }}>
        {INTEGRATIONS_CONTENT.IMAGES_MOBILE.map(
          (item: ImageProps): JSX.Element => (
            <WrapItem key={item.src}>
              <Image
                {...item}
                placeholder="blur"
                blurDataURL={item.src}
                sizes="(min-width: 320px) 100vw, 78px, (min-width: 768px) 100vw, 99px, (min-width: 1440px) 100vw, 120px"
              />
            </WrapItem>
          ),
        )}
      </Wrap>
      <Flex align="center" justify="center" py={{ base: '42px', lg: '72px' }} cursor="pointer">
        <Text mr="10px">{INTEGRATIONS_CONTENT.TEXT}</Text>
        <Image {...INTEGRATIONS_CONTENT.ICON} priority />
      </Flex>
    </Container>
  );
};

export default IntegrationsSection;
