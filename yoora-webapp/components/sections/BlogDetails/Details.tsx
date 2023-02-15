'use client';

// Libs
import { Container, Box, List, Link as ChakraLink, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constant
import { DETAILS_CONTENT } from '@webapp/constants';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Flex, Text, Title, Tag } from '@webapp/components';

const DetailsSection = (): JSX.Element => {
  return (
    <Container size="md" mt={{ base: '50px', lg: '100px' }} mb={{ base: '70px', lg: '120px' }}>
      <Text>{DETAILS_CONTENT.CONTENT.DESCRIPTION}</Text>
      <Title variant="default">{DETAILS_CONTENT.CONTENT.TITLE}</Title>
      <Text>{DETAILS_CONTENT.CONTENT.PARAGRAPH}</Text>
      <Text>{DETAILS_CONTENT.CONTENT.SUB_PARAGRAPH}</Text>

      <Box borderY="1px" my={{ base: '50px', lg: '70px' }}>
        <Text fontWeight="bold" mb="30px">
          {DETAILS_CONTENT.CONTENT.QUOTE}
        </Text>
        <Text variant="subText">{DETAILS_CONTENT.CONTENT.AUTHOR}</Text>
      </Box>

      <Box display="flex" justifyContent="center">
        <Image {...DETAILS_CONTENT.CONTENT.SUB_CONTENT.IMAGE} />
      </Box>
      <Title variant="default">{DETAILS_CONTENT.CONTENT.SUB_CONTENT.TITLE}</Title>
      <Text>{DETAILS_CONTENT.CONTENT.SUB_CONTENT.DESCRIPTION}</Text>
      <Title size="h5" variant="default">
        {DETAILS_CONTENT.CONTENT.SUB_CONTENT.SUB_TITLE}
      </Title>
      <Text>{DETAILS_CONTENT.CONTENT.SUB_CONTENT.PARAGRAPH}</Text>
      <Text mt="30px">{DETAILS_CONTENT.CONTENT.SUB_CONTENT.SUB_PARAGRAPH}</Text>

      <Flex variant="responsive-start" borderY="1px" mt={{ base: '50px', lg: '70px' }}>
        <Tag
          {...DETAILS_CONTENT.CONTENT.SUB_CONTENT.AVATAR}
          text={DETAILS_CONTENT.CONTENT.SUB_CONTENT.NAME}
          subText={DETAILS_CONTENT.CONTENT.SUB_CONTENT.POSITION}
          boxProps={{ ml: '16px', my: '24px' }}
        />
        <List display="flex" gap={2} mb={{ base: '24px', lg: 0 }}>
          {DETAILS_CONTENT.CONTENT.SUB_CONTENT.SOCIAL_ICONS.map(
            (item: ImageProps): JSX.Element => (
              <ListItem key={item.src}>
                <ChakraLink as={Link} href={item.url}>
                  <Image {...item} />
                </ChakraLink>
              </ListItem>
            ),
          )}
        </List>
      </Flex>
    </Container>
  );
};

export default DetailsSection;
