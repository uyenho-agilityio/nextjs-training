'use client';

// Libs
import { Container } from '@chakra-ui/react';
import { useCallback } from 'react';

// Components
import { Button, Title } from '@webapp/components';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps): JSX.Element => {
  const { name, message } = error || {};
  const handleReset = useCallback(() => reset(), [reset]);

  return (
    <Container size="sm" variant="default" flexDirection="column">
      <Title>
        `${name} : ${message}
      </Title>

      <Button onClick={handleReset} mt={5}>
        Reset
      </Button>
    </Container>
  );
};

export default Error;
