'use client';

// Libs
import { Container, Flex, Box } from '@chakra-ui/react';

// Constant
import { BENEFIT_CONTENT } from '@webapp/constants';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Title, Text, BenefitCard } from '@webapp/components';

const BenefitSection = (): JSX.Element => {
  return (
    <Container as="section" className="benefit-section" py="72px" color="secondary-cl">
      <Flex direction={{ base: 'column', lg: 'row' }} align="flex-end">
        <Title mb={{ base: '16px', lg: 0 }}>{BENEFIT_CONTENT.TITLE}</Title>
        <Text mb={{ base: '48px', lg: '10px' }}>{BENEFIT_CONTENT.DESCRIPTION}</Text>
      </Flex>

      <Flex direction={{ base: 'column', lg: 'row' }} mt={{ base: '18px', lg: '58px' }}>
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
