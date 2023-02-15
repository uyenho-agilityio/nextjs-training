'use client';

// Libs
import { Container, Grid, GridItem, Link as ChakraLink, List, ListItem } from '@chakra-ui/react';
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
import { ImageProps, MenuList, SubMenuList } from '@webapp/types';

// Components
import { Text, Select } from '@webapp/components';

const Footer = (): JSX.Element => {
  return (
    <Container as="footer" className="footer" pt={{ base: '40px', lg: '70px' }}>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}>
        <GridItem colSpan={{ base: 6, lg: 2 }}>
          <ChakraLink as={Link} href="/">
            <Image {...LOGO} priority />
          </ChakraLink>
          <Text mt={7} mb={2}>
            We built an elegant solution.
          </Text>
          <Text>Our team created a fully integrated sales and marketing solution for SMBs</Text>
          <List display="flex" gap={2} my={{ base: '6', lg: '8' }}>
            {SOCIAL_ICONS.map(
              (item: ImageProps): JSX.Element => (
                <ListItem key={item.src}>
                  <ChakraLink as={Link} href={item.url}>
                    <Image {...item} />
                  </ChakraLink>
                </ListItem>
              ),
            )}
          </List>
        </GridItem>

        {MENU_LIST.map((menu: MenuList) => (
          <GridItem key={menu.id} colSpan={{ base: 6, lg: 1 }}>
            <ChakraLink as={Link} href="#">
              <Text fontWeight="bold" mb={3}>
                {menu.title}
              </Text>
            </ChakraLink>

            <List>
              {menu.subMenu.map(
                (item: SubMenuList): JSX.Element => (
                  <ListItem key={item.id}>
                    <ChakraLink as={Link} href="#">
                      <Text size="xs" mb={3}>
                        {item.subTitle}
                      </Text>
                    </ChakraLink>
                  </ListItem>
                ),
              )}
            </List>
          </GridItem>
        ))}

        <GridItem colSpan={6} borderTop="1px border-cl" mt={{ lg: '80px' }} />

        <GridItem colSpan={{ base: 6, lg: 2 }}>
          <Text color="third-cl" my={6}>
            © Copyright 2022 Yoora, Inc.
          </Text>
        </GridItem>

        <GridItem
          display="flex"
          alignItems={{ base: 'flex-start', lg: 'center' }}
          colSpan={{ base: 6, lg: 3 }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          {/* <List display="flex" flexDirection={{ base: 'column', lg: 'row' }}> */}
          {POLICY_DATA.map(
            (item: { text: string }): JSX.Element => (
              // <ListItem key={item.text}>
              <ChakraLink as={Link} href="#" key={item.text}>
                <Text mb={3} mr={12}>
                  {item.text}
                </Text>
              </ChakraLink>
              // </ListItem>
            ),
          )}
          {/* </List> */}
        </GridItem>

        <GridItem display="flex" alignItems="center" colSpan={{ base: 6, lg: 1 }}>
          <Image {...GLOBE} priority />
          <Select options={LANGUAGE_OPTIONS} w="fit-content" />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Footer;
