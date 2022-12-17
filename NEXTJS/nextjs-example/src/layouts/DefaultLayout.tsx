import { Box, Container } from '@chakra-ui/react';

// Models
import { LayoutProps } from 'src/models';

// Component
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Container>
      <Header />
      <Box as="main" my={10}>
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
