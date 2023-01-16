'use client';

// Libs
import { List, ListItem } from '@chakra-ui/react';
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

export const FeaturesCard: React.FC<CardProps> = (detailsCard): JSX.Element => {
  const { tag, list } = detailsCard;

  return (
    <Card
      {...detailsCard}
      leftChildren={
        <Tag text={tag} chakraTagProps={{ bg: 'third-bg', px: 2, py: 1, borderRadius: '4px' }} />
      }
      rightChildren={
        <List spacing="16px">
          {list.map(
            (list: ListProps): JSX.Element => (
              <ListItem key={list.id} display="flex">
                <Image {...list.icon} priority />
                <Text ml={{ base: '19px', lg: '27px' }}>{list.text}</Text>
              </ListItem>
            ),
          )}
        </List>
      }
    />
  );
};
