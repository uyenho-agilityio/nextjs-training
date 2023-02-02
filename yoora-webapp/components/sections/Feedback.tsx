'use client';

// Libs
import { Container } from '@chakra-ui/react';
import Image from 'next/image';

// Constant
import { FEEDBACK_CONTENT } from '@webapp/constants';

// Components
import { Flex, Text, Title, FeedbackCardProps, FeedbackCard } from '@webapp/components';

type ItemProps = FeedbackCardProps;

const FeedbackSection = (): JSX.Element => {
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
          <Image {...FEEDBACK_CONTENT.ICON} priority />
        </Flex>
      </Flex>

      <Flex variant="responsive" alignItems="none">
        {FEEDBACK_CONTENT.CARDS.map(
          (item: ItemProps): JSX.Element => (
            <FeedbackCard key={item.id} {...item} />
          ),
        )}
      </Flex>
    </Container>
  );
};

export default FeedbackSection;
