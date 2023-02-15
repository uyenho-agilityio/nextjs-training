'use client';

// Libs
import { Container, Wrap, List, ListItem } from '@chakra-ui/react';
import Image from 'next/image';

// Constants
import { BRANDS_CONTENT } from '@webapp/constants';

// Type
import { ImageProps } from '@webapp/types';

// Component
import { Text } from '@webapp/components';

const BrandsSection = (): JSX.Element => {
  return (
    <Container
      as="section"
      className="brands-section"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent="space-between"
      pb="40px"
    >
      <Text size="xs" mb="48px">
        {BRANDS_CONTENT.TEXT}
      </Text>
      <Wrap align="center" spacing={{ base: '30px', lg: '60px' }}>
        <List>
          {BRANDS_CONTENT.IMAGES.map(
            (item: ImageProps): JSX.Element => (
              <ListItem key={item.src}>
                <Image
                  key={item.src}
                  {...item}
                  placeholder="blur"
                  blurDataURL={item.src}
                  sizes="(min-width: 320px) 100vw, 26px, (min-width: 768px) 100vw, 26px, (min-width: 1440px) 100vw, 32px"
                />
              </ListItem>
            ),
          )}
        </List>
      </Wrap>
    </Container>
  );
};

export default BrandsSection;
