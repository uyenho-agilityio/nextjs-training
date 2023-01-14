'use client';

// Libs
import { Box, Divider } from '@chakra-ui/react';
import Image from 'next/image';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Card, Tag } from '@webapp/components';

export type CardProps = {
  id: number;
  tag: string;
  image: ImageProps;
  subTitle: string;
  date: string;
  author: string;
};

export const MoreTopicsCard: React.FC<CardProps> = (detailsCard): JSX.Element => {
  return (
    <Card
      text={detailsCard.tag}
      leftChildren={
        <>
          <Divider my={{ base: '16px', lg: '24px' }} borderColor="border-cl" />
          <Box maxH="241px">
            <Image
              {...detailsCard.image}
              sizes="(min-width: 320px) 100vw, 181px, (min-width: 768px) 100vw, 90px, (min-width: 1440px) 100vw, 241px"
            />
          </Box>
        </>
      }
      {...detailsCard}
      boxProps={{ mt: { base: '15px', lg: '20px' } }}
      rightChildren={
        <Tag
          text={detailsCard.date}
          extraText={detailsCard.author}
          chakraTagProps={{ p: 0 }}
          boxProps={{ mt: { base: '16px', lg: '24px' } }}
        />
      }
    />
  );
};
