'use client';

// Libs
import { Box, Container, Divider } from '@chakra-ui/react';
import { NextPage } from 'next';

// Constant
import { GET_IN_TOUCH_CONTENT } from '@webapp/constants';

// Components
import { Title, GetInTouch, BrandsSection } from '@webapp/components';

const ContactPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Box bg="primary-bg" pt={{ base: '40px', lg: '80px' }}>
        <Container>
          <Title size="h1" mb={{ base: '32px', lg: '72px' }}>
            {GET_IN_TOUCH_CONTENT.TITLE}
          </Title>
          <GetInTouch />
        </Container>
      </Box>

      <Container mt={{ base: '70px', lg: '100px' }} mb="20px">
        <BrandsSection />
      </Container>
      <Divider borderColor="border-cl" />
    </>
  );
};

export default ContactPage;
