'use client';

// Libs
import { Container, Divider, Grid, GridItem } from '@chakra-ui/react';

// Constant
import { REVENUE_CONTENT } from '@webapp/constants';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Flex, Tag, Text, Title } from '@webapp/components';

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
      <Title size="h2">{REVENUE_CONTENT.TITLE}</Title>
      <Text>{REVENUE_CONTENT.TEXT}</Text>

      {REVENUE_CONTENT.ITEMS.map((item: ItemProps): JSX.Element => {
        const { id, growth, description, title, image, name, position } = item;

        return (
          <Flex key={id} variant="column">
            <Divider
              mt={{ base: '48px', lg: '72px' }}
              mb={{ base: '32px', lg: '48px' }}
              borderColor="third-cl"
            />
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}>
              <GridItem colSpan={{ base: 1, lg: 1 }}>
                <Title size="heading">{growth}</Title>
                <Text size="md" variant="subTitle" mt={{ base: '19px', lg: '24px' }} mb="30px">
                  {description}
                </Text>
              </GridItem>

              <GridItem colSpan={{ base: 1, lg: 2 }}>
                <Text mb="33px">{title}</Text>
                <Tag {...image} text={name} subText={position} boxProps={{ ml: '12px' }} />
              </GridItem>
            </Grid>
          </Flex>
        );
      })}
    </Container>
  );
};

export default RevenueSection;
