'use client';

// Libs
import { Divider } from '@chakra-ui/react';
import Image from 'next/image';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Card, Tag } from '@webapp/components';
import { Text } from '../../common/Text/index';

export type CardProps = {
  id: number;
  icon: ImageProps;
  message: string;
  image: ImageProps;
  name: string;
  position: string;
};

export const FeedbackCard: React.FC<CardProps> = (detailsCard): JSX.Element => {
  const { id, icon, message, image, name, position } = detailsCard;

  return (
    <Card
      key={id}
      leftChildren={
        <>
          <Image {...icon} priority />
          <Divider my={{ base: '16px', lg: '24px' }} borderColor="border-cl" />
        </>
      }
      rightChildren={
        <>
          <Text variant="subTitle" h={{ lg: '170px' }}>
            {message}
          </Text>
          <Tag
            {...image}
            text={name}
            subText={position}
            boxProps={{ ml: '12px' }}
            chakraTagProps={{ mt: '24px' }}
          />
        </>
      }
      chakraCardProps={{ maxW: '360px' }}
    />
  );
};
