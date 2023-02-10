'use client';

// Libs
import { Divider } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import { Card, Tag } from '@webapp/components';

type CardProps = {
  tag: string;
  title: string;
  date: string;
  author: string;
};

const BannerCardBase = (detailsCard: CardProps): JSX.Element => {
  const { tag, date, author } = detailsCard;

  return (
    <Card
      size="h3"
      variant="card"
      {...detailsCard}
      text={tag}
      leftChildren={<Divider my="14px" borderColor="border-cl" />}
      rightChildren={<Tag text={date} extraText={author} />}
      chakraCardProps={{ pt: { base: '30px', lg: '60px' }, bg: 'primary-bg' }}
    />
  );
};

export const BannerCard = memo(BannerCardBase);
