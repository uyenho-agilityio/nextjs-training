'use client';

// Libs
import { Grid, GridItem, Link as ChakraLink, List } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import {
  LOGO,
  SOCIAL_ICONS,
  MENU_LIST,
  GLOBE,
  POLICY_DATA,
  LANGUAGE_OPTIONS,
} from '@webapp/constants';

// Types
import { imageProps, menuList, subMenuList } from '@webapp/types';

// Components
import { Text, Select } from '@webapp/components';

const Footer = (): JSX.Element => {
  return (
    <Grid as="footer" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }} gap={4}>
      <GridItem colSpan={{ base: 6, lg: 2 }}>
        <ChakraLink as={Link} href="/">
          <Image {...LOGO} priority />
        </ChakraLink>
        <Text mt={7} mb={2}>
          We built an elegant solution.
        </Text>
        <Text>Our team created a fully integrated sales and marketing solution for SMBs</Text>
        <List display="flex" alignItems="center" my={{ base: '6', lg: '8' }}>
          {SOCIAL_ICONS.map(
            (item: imageProps): JSX.Element => (
              <ChakraLink as={Link} href={item.url} key={item.url} mr={4}>
                <Image {...item} />
              </ChakraLink>
            ),
          )}
        </List>
      </GridItem>

      {MENU_LIST.map((menu: menuList) => (
        <GridItem key={menu.id} colSpan={{ base: 6, lg: 1 }}>
          <ChakraLink as={Link} href="#">
            <Text size="sm" fontWeight="bold" mb={3}>
              {menu.title}
            </Text>
          </ChakraLink>

          <List>
            {menu.subMenu.map(
              (item: subMenuList): JSX.Element => (
                <ChakraLink as={Link} href="#" key={item.id}>
                  <Text size="xs" mb={3}>
                    {item.subTitle}
                  </Text>
                </ChakraLink>
              ),
            )}
          </List>
        </GridItem>
      ))}

      <GridItem colSpan={6} borderTop="1px" borderTopColor="border-cl" mt={{ lg: '80px' }} />

      <GridItem colSpan={{ base: 6, lg: 2 }}>
        <Text color="third-cl" my={6}>
          © Copyright 2022 Yoora, Inc.
        </Text>
      </GridItem>

      <GridItem display="flex" alignItems="center" colSpan={{ base: 6, lg: 3 }}>
        <List display="flex" flexDirection={{ base: 'column', lg: 'row' }}>
          {POLICY_DATA.map(
            (item: { text: string }): JSX.Element => (
              <ChakraLink as={Link} href="#" key={item.text}>
                <Text mb={3} mr={12}>
                  {item.text}
                </Text>
              </ChakraLink>
            ),
          )}
        </List>
      </GridItem>

      <GridItem display="flex" alignItems="center" colSpan={{ base: 6, lg: 1 }}>
        <Image {...GLOBE} priority />
        <Select options={LANGUAGE_OPTIONS} w="fit-content" />
      </GridItem>
    </Grid>
  );
};

export default Footer;
