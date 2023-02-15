'use client';

// Libs
import { Divider } from '@chakra-ui/react';
import { memo } from 'react';
import Image from 'next/image';

// Type
import { Message } from '@webapp/models';

// Constant
import { DOUBLE_QUOTE_ICON } from '@webapp/constants';

// Components
import { Card, Tag, Text } from '@webapp/components';

const FeedbackCardBase = ({ feedback }: { feedback: Message }): JSX.Element => {
  const { name, email, message, avatar } = feedback;

  return (
    <Card
      leftChildren={
        <>
          <Image {...DOUBLE_QUOTE_ICON} priority />
          <Divider my={{ base: '16px', lg: '24px' }} borderColor="border-cl" />
        </>
      }
      rightChildren={
        <>
          <Text variant="subTitle" h={{ lg: '170px' }}>
            {message}
          </Text>
          <Tag
            {...avatar}
            text={name}
            subText={email}
            boxProps={{ ml: '12px' }}
            chakraTagProps={{ mt: '24px' }}
          />
        </>
      }
      chakraCardProps={{ maxW: '360px' }}
    />
  );
};

export const FeedbackCard = memo(FeedbackCardBase);
