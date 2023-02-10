'use client';

// Lib
import { Wrap } from '@chakra-ui/react';

// Type
import { Message } from '@webapp/models';

// Component
import { FeedbackCard } from '@webapp/components';

export const FeedbackList = ({ data }: { data: Message[] }): JSX.Element => {
  return (
    <Wrap align="center">
      {(data || []).map(
        (message: Message): JSX.Element => (
          <FeedbackCard key={message.id} feedback={message} />
        ),
      )}
    </Wrap>
  );
};
