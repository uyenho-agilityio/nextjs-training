'use client';

// Libs
import { Divider } from '@chakra-ui/react';
import Image from 'next/image';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Card, Tag } from '@webapp/components';

export type CardProps = {
  id: number;
  tag: string;
  image: ImageProps;
  title: string;
  date: string;
  author: string;
};

export const WhatsNewCard: React.FC<CardProps> = (detailsCard): JSX.Element => {
  const { tag, image, date, author } = detailsCard;

  return (
    <Card
      text={tag}
      leftChildren={
        <>
          <Divider my={{ base: '16px', lg: '24px' }} />
          <Image
            {...image}
            placeholder="blur"
            blurDataURL={image.src}
            sizes="(min-width: 320px) 100vw, 181px, (min-width: 768px) 100vw, 275px, (min-width: 1440px) 100vw, 370px"
          />
        </>
      }
      {...detailsCard}
      rightChildren={
        <Tag text={date} extraText={author} boxProps={{ mt: { base: '16px', lg: '24px' } }} />
      }
      chakraCardProps={{ maxW: '555px' }}
    />
  );
};
