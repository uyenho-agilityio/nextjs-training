'use client';

// Libs
import { Divider } from '@chakra-ui/react';

// Components
import { Card, Tag } from '@webapp/components';

type CardProps = {
  tag: string;
  title: string;
  date: string;
  author: string;
};

export const BannerCard: React.FC<CardProps> = (detailsCard): JSX.Element => {
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
