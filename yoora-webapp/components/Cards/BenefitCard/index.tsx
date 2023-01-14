'use client';

// Libs
import { Divider } from '@chakra-ui/react';
import Image from 'next/image';

// Type
import { ImageProps } from '@webapp/types';

// Component
import { Card } from '@webapp/components';

type CardProps = {
  id: number;
  image: ImageProps;
  title: string;
  description: string;
};

export const BenefitCard: React.FC<CardProps> = (detailsCard): JSX.Element => {
  return (
    <Card
      {...detailsCard}
      leftChildren={
        <>
          <Image
            {...detailsCard.image}
            placeholder="blur"
            blurDataURL={detailsCard.image.src}
            sizes="(min-width: 320px) 100vw, 48px, (min-width: 768px) 100vw, 72px, (min-width: 1440px) 100vw, 72px"
          />
          <Divider
            mt={{ base: '46px', lg: detailsCard.id == 2 ? '70px' : '56px' }}
            borderColor={detailsCard.id == 1 ? 'primary-cl' : 'inherit'}
            mb="16px"
          />
        </>
      }
      chakraCardProps={{
        mr: '9px',
        mt: detailsCard.id == 1 ? '-10px' : '0',
        bg: detailsCard.id == 1 ? 'third-bg' : 'inherit',
        color: detailsCard.id == 1 ? 'primary-cl' : 'secondary-cl',
        variant: 'elevated',
      }}
      cardBodyProps={{ gap: '10px' }}
    />
  );
};
