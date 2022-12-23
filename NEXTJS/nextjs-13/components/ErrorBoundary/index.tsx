import { Container, Box } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

// Constant
import { TEXT, PAGE_ROUTES } from 'constants/index';

// Component
import { Title } from 'components';

type Props = {
  children: ReactNode;
};

type State = {
  error: Error;
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    error: {} as Error,
  };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;

    if (error.message) {
      return (
        <Container size="sm" variant="default">
          <Title>
            `${error.name} : ${error.message}
          </Title>

          <Box textTransform="uppercase" color="red">
            <Link href={PAGE_ROUTES.HOME}>{TEXT.BACK_HOME}</Link>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
