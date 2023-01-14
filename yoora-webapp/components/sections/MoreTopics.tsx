'use client';

// Libs
import { Container, Flex } from '@chakra-ui/react';

// Constant
import { MORE_TOPICS_CONTENT } from '@webapp/constants';

// Components
import { Title, MoreTopicsCardProps, MoreTopicsCard } from '@webapp/components';

type ItemProps = MoreTopicsCardProps;

const MoreTopicsSection = (): JSX.Element => {
  return (
    <Container as="section" className="more-topics-section" py={{ base: '40px', lg: '80px' }}>
      <Title mb="30px">{MORE_TOPICS_CONTENT.TITLE}</Title>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        {MORE_TOPICS_CONTENT.CARDS.map(
          (item: ItemProps): JSX.Element => (
            <MoreTopicsCard key={item.id} {...item} />
          ),
        )}
      </Flex>
    </Container>
  );
};

export default MoreTopicsSection;
