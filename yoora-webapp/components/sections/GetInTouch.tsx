'use client';

// Libs
import { Box, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { GET_IN_TOUCH_CONTENT, PAGE_ROUTES } from '@webapp/constants';

// Components
import { Flex, Text, ContactForm } from '@webapp/components';

const GetInTouch = (): JSX.Element => {
  return (
    <Flex
      className="get-in-touch-section"
      as="section"
      variant="responsive-reverse"
      pb={{ base: '70px', lg: '126px' }}
    >
      <Box mt={18}>
        <Text variant="title">{GET_IN_TOUCH_CONTENT.SUB_TITLE}</Text>
        <Text variant="subTitle" mb={8}>
          {GET_IN_TOUCH_CONTENT.DESCRIPTION}
        </Text>
        <Image
          {...GET_IN_TOUCH_CONTENT.IMAGE}
          placeholder="blur"
          blurDataURL={GET_IN_TOUCH_CONTENT.IMAGE.src}
          sizes="(min-width: 320px) 100vw, 171px, (min-width: 768px) 100vw, 229px, (min-width: 1440px) 100vw, 288px"
          loading="eager"
        />
        <Flex variant="responsive" mt={8}>
          {GET_IN_TOUCH_CONTENT.ITEMS.map(
            (item: { id: number; text: string; email: string }): JSX.Element => (
              <Flex key={item.id} mr="auto" mb="30px">
                <Box borderLeft="1px" borderLeftColor="border-cl">
                  <Text variant="subTitle" pl={4}>
                    {item.text}
                  </Text>
                  <ChakraLink as={Link} href={`mailto:${PAGE_ROUTES.CONTACT}/#`}>
                    <Text ml={4}>{item.email}</Text>
                  </ChakraLink>
                </Box>
              </Flex>
            ),
          )}
        </Flex>
      </Box>

      <Box>
        <ContactForm />
      </Box>
    </Flex>
  );
};

export default GetInTouch;
