'use client';

// Lib
import { Container } from '@chakra-ui/react';

// Constant
import { MORE_TOPICS_CONTENT } from '@webapp/constants';

// Components
import { Flex, Title, MoreTopicsCardProps, MoreTopicsCard } from '@webapp/components';

type ItemProps = MoreTopicsCardProps;

const MoreTopicsSection = (): JSX.Element => {
  return (
    <Container as="section" className="more-topics-section" py={{ base: '40px', lg: '80px' }}>
      <Title size="h1" ml="20px" mb={{ base: '48px', lg: '100px' }}>
        {MORE_TOPICS_CONTENT.TITLE}
      </Title>

      <Flex variant="responsive-between" alignItems="none">
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
