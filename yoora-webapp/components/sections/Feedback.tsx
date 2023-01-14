'use client';

// Libs
import { Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';

// Constant
import { FEEDBACK_CONTENT } from '@webapp/constants';

// Components
import { Text, Title, FeedbackCardProps, FeedbackCard } from '@webapp/components';

type ItemProps = FeedbackCardProps;

const FeedbackSection = (): JSX.Element => {
  return (
    <Container as="section" className="feedback-section" pb={{ base: '42px', lg: '72px' }}>
      <Flex
        justify="space-between"
        align={{ base: 'center', lg: 'flex-end' }}
        direction={{ base: 'column', lg: 'row' }}
        pt={{ base: '42px', lg: '72px' }}
        pb={{ base: '26px', lg: '48px' }}
        gap="26px"
      >
        <Title textAlign="center">{FEEDBACK_CONTENT.TITLE}</Title>
        <Flex cursor="pointer">
          <Text mr="10px">{FEEDBACK_CONTENT.TEXT}</Text>
          <Image {...FEEDBACK_CONTENT.ICON} priority />
        </Flex>
      </Flex>

      <Flex direction={{ base: 'column', lg: 'row' }}>
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
