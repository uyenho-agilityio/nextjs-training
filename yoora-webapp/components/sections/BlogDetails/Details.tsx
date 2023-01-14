'use client';

// Libs
import { Container, Box, Flex, List, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constant
import { DETAILS_CONTENT } from '@webapp/constants';

// Type
import { ImageProps } from '@webapp/types';

// Components
import { Text, Title, Tag } from '@webapp/components';

const DetailsSection = (): JSX.Element => {
  return (
    <Container size="md" mt={{ base: '50px', lg: '100px' }} mb={{ base: '70px', lg: '120px' }}>
      <Text>{DETAILS_CONTENT.CONTENT.DESCRIPTION}</Text>
      <Title mt={{ base: '50px', lg: '70px' }} mb="12px">
        {DETAILS_CONTENT.CONTENT.TITLE}
      </Title>
      <Text>{DETAILS_CONTENT.CONTENT.PARAGRAPH}</Text>
      <Text mt="30px">{DETAILS_CONTENT.CONTENT.SUB_PARAGRAPH}</Text>

      <Box borderY="1px" my={{ base: '50px', lg: '70px' }}>
        <Text fontWeight="bold" mb="30px">
          {DETAILS_CONTENT.CONTENT.QUOTE}
        </Text>
        <Text variant="subText">{DETAILS_CONTENT.CONTENT.AUTHOR}</Text>
      </Box>

      <Box display="flex" justifyContent="center">
        <Image {...DETAILS_CONTENT.CONTENT.SUB_CONTENT.IMAGE} />
      </Box>
      <Title mt={{ base: '50px', lg: '70px' }} mb="12px">
        {DETAILS_CONTENT.CONTENT.SUB_CONTENT.TITLE}
      </Title>
      <Text>{DETAILS_CONTENT.CONTENT.SUB_CONTENT.DESCRIPTION}</Text>
      <Text fontWeight="bold" mt={{ base: '50px', lg: '70px' }} mb="12px">
        {DETAILS_CONTENT.CONTENT.SUB_CONTENT.SUB_TITLE}
      </Text>
      <Text>{DETAILS_CONTENT.CONTENT.SUB_CONTENT.PARAGRAPH}</Text>
      <Text mt="30px">{DETAILS_CONTENT.CONTENT.SUB_CONTENT.SUB_PARAGRAPH}</Text>

      <Flex
        borderY="1px"
        justify={{ base: 'flex-start', lg: 'space-between' }}
        direction={{ base: 'column', lg: 'row' }}
        mt={{ base: '50px', lg: '70px' }}
      >
        <Tag
          {...DETAILS_CONTENT.CONTENT.SUB_CONTENT.AVATAR}
          text={DETAILS_CONTENT.CONTENT.SUB_CONTENT.NAME}
          subText={DETAILS_CONTENT.CONTENT.SUB_CONTENT.POSITION}
          boxProps={{ ml: '16px', my: '24px' }}
        />
        <List display="flex" alignItems="center" ml={2} mb={{ base: '24px', lg: 0 }}>
          {DETAILS_CONTENT.CONTENT.SUB_CONTENT.SOCIAL_ICONS.map(
            (item: ImageProps): JSX.Element => (
              <ChakraLink as={Link} href={item.url} key={item.url} mr={4}>
                <Image {...item} />
              </ChakraLink>
            ),
          )}
        </List>
      </Flex>
    </Container>
  );
};

export default DetailsSection;
