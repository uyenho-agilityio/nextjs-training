'use client';

// Lib
import { Container } from '@chakra-ui/react';

// Constant
import { BENEFIT_CONTENT } from '@webapp/constants';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Flex, Title, Text, BenefitCard } from '@webapp/components';

const BenefitSection = (): JSX.Element => {
  return (
    <Container as="section" className="benefit-section" py="72px" color="secondary-cl">
      <Flex variant="responsive" alignItems="flex-end">
        <Title size="h2" mb={{ base: '16px', lg: 0 }}>
          {BENEFIT_CONTENT.TITLE}
        </Title>
        <Text>{BENEFIT_CONTENT.DESCRIPTION}</Text>
      </Flex>

      <Flex variant="responsive" mt={{ base: '48px', lg: '58px' }}>
        {BENEFIT_CONTENT.CARDS.map(
          (item: {
            id: number;
            image: ImageProps;
            title: string;
            description: string;
          }): JSX.Element => (
            <BenefitCard key={item.id} {...item} />
          ),
        )}
      </Flex>
    </Container>
  );
};

export default BenefitSection;
