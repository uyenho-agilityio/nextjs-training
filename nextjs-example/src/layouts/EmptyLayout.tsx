import { Container } from '@chakra-ui/react';

// Models
import { LayoutProps } from 'src/models';

const EmptyLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Container as="main" variant="default">
      {children}
    </Container>
  );
};

export default EmptyLayout;
