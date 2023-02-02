'use client';

// Libs
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

// Components
import {
  HeroSection,
  BrandsSection,
  BenefitSection,
  FeaturesSection,
  IntegrationsSection,
  WhatsNewSection,
  RevenueSection,
  FeedbackSection,
  CTASection,
} from '@webapp/components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Box bg="primary-bg">
        <HeroSection />
        <BrandsSection />
      </Box>

      <Box bg="secondary-bg">
        <BenefitSection />
      </Box>

      <FeaturesSection />

      <Box bg="primary-bg">
        <IntegrationsSection />
      </Box>

      <WhatsNewSection />
      <RevenueSection />

      <Box bg="primary-bg">
        <FeedbackSection />
      </Box>

      <CTASection />
    </>
  );
};

export default Home;
