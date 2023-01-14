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
      <Flex className="abc" direction={{ base: 'column', lg: 'row' }}>
        <Box>
          <Title mb="16px">{BENEFIT_CONTENT.TITLE}</Title>
        </Box>
        <Box>
          <Text mb={{ base: '48px', lg: '64px' }}>{BENEFIT_CONTENT.DESCRIPTION}</Text>
        </Box>
      </Flex>

      <Flex direction={{ base: 'column', lg: 'row' }} mt="30px">
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
