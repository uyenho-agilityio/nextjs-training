'use client';

// Libs
import { Container, Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { WHATS_NEW_CONTENT, PAGE_ROUTES } from '@webapp/constants';

// Components
import { Text, Title, WhatsNewCard, WhatsNewCardProps } from '@webapp/components';

type ItemProps = WhatsNewCardProps;

const WhatsNewSection = (): JSX.Element => {
  return (
    <Container as="section" className="whats-new-section">
      <Flex
        justify="space-between"
        align={{ lg: 'flex-end' }}
        direction={{ base: 'column', lg: 'row' }}
        pt={{ base: '42px', lg: '72px' }}
        pb={{ base: '26px', lg: '48px' }}
        gap="26px"
        cursor="pointer"
      >
        <Box>
          <ChakraLink as={Link} href={PAGE_ROUTES.DETAILS}>
            <Title>{WHATS_NEW_CONTENT.TITLE}</Title>
          </ChakraLink>
        </Box>
        <Flex>
          <Text mr="10px">{WHATS_NEW_CONTENT.TEXT}</Text>
          <Image {...WHATS_NEW_CONTENT.ICON} priority />
        </Flex>
      </Flex>

      <Flex direction={{ base: 'column', lg: 'row' }}>
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
