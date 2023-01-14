'use client';

// Libs
import { Container, Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

// Constant
import { HERO_CONTENT } from '@webapp/constants';

// Components
import { Title, Text, InputGroup, TextArea, Button } from '@webapp/components';

const HeroSection = (): JSX.Element => {
  return (
    <Container
      as="section"
      className="hero-section"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      py={{ base: '50px', lg: '100px' }}
      gap={{ base: '10px', lg: '50px' }}
    >
      <Box>
        <Title maxW="639px" mb="24px">
          {HERO_CONTENT.TITLE}
        </Title>
        <Text maxW="478px" mb={{ base: '32px', lg: '64px' }}>
          {HERO_CONTENT.DESCRIPTION}
        </Text>

        {/* Mobile */}
        <Flex
          display={{ lg: 'none' }}
          maxW="272px"
          direction="column"
          align="center"
          pos="relative"
        >
          <TextArea h="112px" placeholder={HERO_CONTENT.INPUT} />
          <Button variant="success" w="256px" left="3%" bottom="6%" display="flex" pos="absolute">
            {HERO_CONTENT.BUTTON}
          </Button>
        </Flex>

        {/* Desktop */}
        <InputGroup
          type="text"
          placeholder={HERO_CONTENT.INPUT}
          rightElement={
            <Button
              variant="success"
              pos="absolute"
              right={{ lg: '3%' }}
              display={{ base: 'none', lg: 'flex' }}
            >
              {HERO_CONTENT.BUTTON}
            </Button>
          }
          chakraInputProps={{ maxW: '457px', m: 0, display: { base: 'none', lg: 'block' } }}
        />
        <Text mt="12px">{HERO_CONTENT.TEXT}</Text>
      </Box>

      <Box mt="46px">
        <Image
          {...HERO_CONTENT.IMAGE}
          placeholder="blur"
          blurDataURL={HERO_CONTENT.IMAGE.src}
          sizes="(min-width: 320px) 100vw, 26px, (min-width: 768px) 100vw, 39px, (min-width: 1440px) 100vw, 53px"
        />
      </Box>
    </Container>
  );
};

export default HeroSection;
