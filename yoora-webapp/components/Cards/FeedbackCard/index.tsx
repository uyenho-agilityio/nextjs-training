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
  icon: ImageProps;
  message: string;
  image: ImageProps;
  name: string;
  position: string;
};

export const FeedbackCard: React.FC<CardProps> = (detailsCard): JSX.Element => {
  return (
    <Card
      key={detailsCard.id}
      leftChildren={
        <>
          <Image {...detailsCard.icon} priority />
          <Divider my={{ base: '16px', lg: '24px' }} borderColor="border-cl" />
        </>
      }
      subTitle={detailsCard.message}
      rightChildren={
        <Tag
          {...detailsCard.image}
          text={detailsCard.name}
          subText={detailsCard.position}
          boxProps={{ ml: '12px' }}
          chakraTagProps={{ mt: { base: '24px', lg: '48px' } }}
        />
      }
      chakraCardProps={{ maxW: '360px' }}
    />
  );
};
