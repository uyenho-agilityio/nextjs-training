import { Box, Container } from '@chakra-ui/react';

// Models
import { LayoutProps } from 'src/models';

// Component
import Header from './Header';

const DefaultLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Container>
      <Header />
      <Box as="main" flexGrow={1}>
        {children}
      </Box>
    </Container>
  );
};

export default DefaultLayout;
