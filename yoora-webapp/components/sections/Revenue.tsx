'use client';

// Libs
import { Container, Divider, Flex, Grid, GridItem } from '@chakra-ui/react';

// Constant
import { REVENUE_CONTENT } from '@webapp/constants';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Tag, Text, Title } from '@webapp/components';

type ItemProps = {
  id: number;
  growth: string;
  description: string;
  title: string;
  image: ImageProps;
  name: string;
  position: string;
};

const RevenueSection = (): JSX.Element => {
  return (
    <Container as="section" className="revenue-section" my={{ base: '70px', lg: '120px' }}>
      <Title>{REVENUE_CONTENT.TITLE}</Title>
      <Text>{REVENUE_CONTENT.TEXT}</Text>

      {REVENUE_CONTENT.ITEMS.map(
        (item: ItemProps): JSX.Element => (
          <Flex key={item.id} direction="column">
            <Divider mt={{ base: '48px', lg: '72px' }} mb={{ base: '32px', lg: '48px' }} />
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}>
              <GridItem colSpan={{ base: 4, lg: 1 }}>
                <Text>{item.growth}</Text>
                <Text>{item.description}</Text>
              </GridItem>

              <GridItem colSpan={{ base: 4, lg: 2 }}>
                <Text>{item.title}</Text>
                <Tag
                  {...item.image}
                  text={item.name}
                  subText={item.position}
                  boxProps={{ ml: '12px' }}
                />
              </GridItem>
            </Grid>
          </Flex>
        ),
      )}
    </Container>
  );
};

export default RevenueSection;
