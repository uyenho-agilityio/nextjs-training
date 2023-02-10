'use client';

// Libs
import { Divider } from '@chakra-ui/react';
import { memo } from 'react';
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

const BenefitCardBase = (detailsCard: CardProps): JSX.Element => {
  const { id, image } = detailsCard;

  return (
    <Card
      size="h7"
      {...detailsCard}
      leftChildren={
        <>
          <Image
            {...image}
            placeholder="blur"
            blurDataURL={image.src}
            sizes="(min-width: 320px) 100vw, 48px, (min-width: 768px) 100vw, 72px, (min-width: 1440px) 100vw, 72px"
          />
          <Divider
            mt={{ base: '46px', lg: id == 2 ? '70px' : '56px' }}
            borderColor={id == 1 ? 'primary-cl' : 'inherit'}
            mb="16px"
          />
        </>
      }
      chakraCardProps={{
        mr: '9px',
        mt: id == 1 ? '-10px' : '0',
        bg: id == 1 ? 'third-bg' : 'inherit',
        color: id == 1 ? 'primary-cl' : 'secondary-cl',
        variant: 'elevated',
        h: { base: '383px', lg: '439px' },
      }}
    />
  );
};

export const BenefitCard = memo(BenefitCardBase);
