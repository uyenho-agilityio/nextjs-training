'use client';

// Libs
import { List, ListItem } from '@chakra-ui/react';
import { memo } from 'react';
import Image from 'next/image';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Card, Tag, Text } from '@webapp/components';

type ListProps = {
  id: number;
  icon: ImageProps;
  text: string;
};

export type CardProps = {
  id: number;
  image: ImageProps;
  tag: string;
  title: string;
  description: string;
  list: ListProps[];
};

const FeaturesCardBase = (detailsCard: CardProps): JSX.Element => {
  const { tag, list } = detailsCard;

  return (
    <Card
      size="h4"
      variant="card"
      {...detailsCard}
      leftChildren={
        <Tag text={tag} chakraTagProps={{ bg: 'third-bg', px: 2, py: 1, borderRadius: '4px' }} />
      }
      rightChildren={
        <List spacing="16px">
          {list.map((item: ListProps): JSX.Element => {
            const { id, icon, text } = item;

            return (
              <ListItem key={id} display="flex" alignItems="flex-start">
                <Image {...icon} loading="lazy" />
                <Text mt="-5px" ml={{ base: '19px', lg: '27px' }}>
                  {text}
                </Text>
              </ListItem>
            );
          })}
        </List>
      }
    />
  );
};

export const FeaturesCard = memo(FeaturesCardBase);
