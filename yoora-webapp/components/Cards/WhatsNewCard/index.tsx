'use client';

// Libs
import { Divider } from '@chakra-ui/react';
import Image from 'next/image';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Card, Tag, Title } from '@webapp/components';

export type CardProps = {
  id: number;
  tag: string;
  image: ImageProps;
  title: string;
  date: string;
  author: string;
};

export const WhatsNewCard: React.FC<CardProps> = (detailsCard): JSX.Element => {
  const { tag, image, title, date, author } = detailsCard;

  return (
    <Card
      text={tag}
      leftChildren={
        <>
          <Divider mt="14px" mb={{ base: '16px', lg: '24px' }} />
          <Image
            {...image}
            placeholder="blur"
            blurDataURL={image.src}
            sizes="(min-width: 320px) 100vw, 181px, (min-width: 768px) 100vw, 275px, (min-width: 1440px) 100vw, 370px"
          />
        </>
      }
      rightChildren={
        <>
          <Title size="h7" variant="card" h={{ lg: '48px' }}>
            {title}
          </Title>
          <Tag text={date} extraText={author} />
        </>
      }
      chakraCardProps={{ maxW: '555px' }}
    />
  );
};
