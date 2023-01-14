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
  return (
    <Card
      {...detailsCard}
      text={detailsCard.tag}
      leftChildren={<Divider my="14px" borderColor="border-cl" />}
      rightChildren={
        <Tag
          text={detailsCard.date}
          extraText={detailsCard.author}
          boxProps={{ mt: '24px', mb: { base: '38px', lg: '46px' } }}
        />
      }
      chakraCardProps={{ pt: { base: '30px', lg: '60px' }, bg: 'primary-bg' }}
      cardBodyProps={{ maxW: '750px' }}
    />
  );
};
