'use client';

// Libs
import { Divider } from '@chakra-ui/react';
import { memo, useState, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Type
import { Message } from '@webapp/models';

// Constant
import { DOUBLE_QUOTE_ICON } from '@webapp/constants';

// Components
import { Card, Tag, Text } from '@webapp/components';
const Button = dynamic(() => import('@webapp/components').then(mod => mod.Button));

const FeedbackCardBase = ({ feedback }: { feedback: Message }): JSX.Element => {
  const { name, email, message, avatar } = feedback;
  const [isShow, setIsShow] = useState<boolean>(false);
  const isLong = message.length > 180;

  // Truncate text if it's greater than 170 characters
  const truncatedMessage = message.substring(0, 170);

  // Handle show more/less
  const handleToggleMessage = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <Card
      leftChildren={
        <>
          <Image {...DOUBLE_QUOTE_ICON} loading="lazy" />
          <Divider my={{ base: '16px', lg: '24px' }} borderColor="border-cl" />
        </>
      }
      rightChildren={
        <>
          {isLong ? (
            <Text variant="subTitle">
              {isShow ? message : `${truncatedMessage}...`}
              <Button size="xs" variant="showing" onClick={handleToggleMessage}>
                {isShow ? 'Show Less' : 'Show More'}
              </Button>
            </Text>
          ) : (
            <Text variant="subTitle" minH={{ lg: '140px' }}>
              {message}
            </Text>
          )}
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
