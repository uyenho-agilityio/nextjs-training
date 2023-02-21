'use client';

// Libs
import { Container, Flex, Divider, Box } from '@chakra-ui/react';
import Image from 'next/image';

// Constant
import { FEATURES_CONTENT } from '@webapp/constants';

// Component
import { FeaturesCardProps, FeaturesCard } from '@webapp/components';

type ItemProps = FeaturesCardProps;

const FeaturesSection = (): JSX.Element => {
  return (
    <Container as="section" className="features-section" my={{ base: '72px', lg: '120px' }}>
      {FEATURES_CONTENT.map((item: ItemProps): JSX.Element => {
        const { id, image } = item;

        return (
          <Box key={id}>
            <Divider mb={{ base: '40px', lg: '92px' }} />
            <Flex
              direction={{ base: 'column', lg: id % 2 == 0 ? 'row-reverse' : 'row' }}
              mb={{ base: '72px', lg: '120px' }}
            >
              <FeaturesCard {...item} />

              <Image
                {...image}
                placeholder="blur"
                blurDataURL={image.src}
                sizes="(min-width: 320px) 100vw, 272px, (min-width: 768px) 100vw, 413px, (min-width: 1440px) 100vw, 555px"
              />
            </Flex>
          </Box>
        );
      })}
    </Container>
  );
};

export default FeaturesSection;
