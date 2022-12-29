'use client';

// Lib
import { Container } from '@chakra-ui/react';

// Components
import { Button, Title } from 'components';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps): JSX.Element => {
  return (
    <Container size="sm" variant="default">
      <Title>
        `${error.name} : ${error.message}
      </Title>

      <Button onClick={() => reset()}>Reset error boundary</Button>
    </Container>
  );
};

export default Error;
