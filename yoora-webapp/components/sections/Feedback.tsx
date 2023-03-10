'use client';

// Libs
import { Container } from '@chakra-ui/react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Constants
import { FEEDBACK_CONTENT, MESSAGE } from '@webapp/constants';

// Type
import { Message } from '@webapp/models';

// Hook
import { useMessage } from '@webapp/hooks';

// Components
import { Flex, Text, Title } from '@webapp/components';
const Spinner = dynamic(() => import('@webapp/components').then(mod => mod.Spinner));
const FeedbackList = dynamic(() => import('@webapp/components').then(mod => mod.FeedbackList), {
  loading: () => <Spinner />,
});

const FeedbackSection = ({ data }: { data: Message[] }): JSX.Element => {
  const { isLoading } = useMessage();

  return (
    <Container as="section" className="feedback-section" pb={{ base: '42px', lg: '72px' }}>
      <Flex
        variant="responsive-center"
        pt={{ base: '42px', lg: '72px' }}
        pb={{ base: '26px', lg: '48px' }}
        gap="26px"
      >
        <Title size="h3" textAlign="center">
          {FEEDBACK_CONTENT.TITLE}
        </Title>
        <Flex variant="pointer">
          <Text size="lg">{FEEDBACK_CONTENT.TEXT}</Text>
          <Image {...FEEDBACK_CONTENT.ICON} loading="lazy" />
        </Flex>
      </Flex>

      {isLoading && <Spinner variant="center" />}
      {data ? (
        <FeedbackList data={data} />
      ) : (
        <Text textAlign="center" color="red">
          {MESSAGE.NO_FEEDBACKS}
        </Text>
      )}
    </Container>
  );
};

export default FeedbackSection;
