'use client';

// Lib
import { Container } from '@chakra-ui/react';

// Components
import { Button, Title } from '@webapp/components';

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

      <Button onClick={() => reset()}>Reset</Button>
    </Container>
  );
};

export default Error;
