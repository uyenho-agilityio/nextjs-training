'use client';

// Libs
import { Container, Box, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { WHATS_NEW_CONTENT, PAGE_ROUTES } from '@webapp/constants';

// Components
import { Flex, Text, Title, WhatsNewCard, WhatsNewCardProps } from '@webapp/components';

type ItemProps = WhatsNewCardProps;

const WhatsNewSection = (): JSX.Element => {
  return (
    <Container as="section" className="whats-new-section">
      <Flex
        variant="responsive-start"
        pt={{ base: '42px', lg: '72px' }}
        pb={{ base: '26px', lg: '48px' }}
        gap="26px"
      >
        <Box>
          <ChakraLink as={Link} href={PAGE_ROUTES.DETAILS}>
            <Title size="h1">{WHATS_NEW_CONTENT.TITLE}</Title>
          </ChakraLink>
        </Box>
        <Flex variant="pointer">
          <Text size="sm" fontWeight="medium">
            {WHATS_NEW_CONTENT.TEXT}
          </Text>
          <Image {...WHATS_NEW_CONTENT.ICON} priority />
        </Flex>
      </Flex>

      <Flex variant="responsive" alignItems="none">
        {WHATS_NEW_CONTENT.CARDS.map(
          (item: ItemProps): JSX.Element => (
            <WhatsNewCard key={item.id} {...item} />
          ),
        )}
      </Flex>
    </Container>
  );
};

export default WhatsNewSection;
