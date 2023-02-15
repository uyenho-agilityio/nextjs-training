'use client';

// Lib
import { Wrap, WrapItem } from '@chakra-ui/react';

// Type
import { Message } from '@webapp/models';

// Component
import { FeedbackCard } from '@webapp/components';

export const FeedbackList = ({ data }: { data: Message[] }): JSX.Element => {
  return (
    <Wrap align="center">
      {(data || []).map(
        (message: Message): JSX.Element => (
          <WrapItem key={message.id}>
            <FeedbackCard feedback={message} />
          </WrapItem>
        ),
      )}
    </Wrap>
  );
};
