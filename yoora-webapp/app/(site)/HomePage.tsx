'use client';

// Lib
import { Box } from '@chakra-ui/react';

// Hook
import { useMessage } from '@webapp/hooks';

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

const HomePage = (): JSX.Element => {
  const { data } = useMessage();

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
        <FeedbackSection data={data || []} />
      </Box>

      <CTASection />
    </>
  );
};

export default HomePage;
