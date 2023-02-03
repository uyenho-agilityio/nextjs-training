'use client';

// Lib
import { Box } from '@chakra-ui/react';

// Type
import { Message } from '@webapp/models';

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

const HomePage = ({ data }: { data: Message[] }): JSX.Element => {
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
        <FeedbackSection data={data} />
      </Box>

      <CTASection />
    </>
  );
};

export default HomePage;
