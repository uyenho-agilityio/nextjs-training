'use client';

// Lib
import { Container } from '@chakra-ui/react';

// Constant
import { TEXT } from '@webapp/constants';

// Components
import { Input, InputGroup, Button } from '@webapp/components';

const LoginForm = (): JSX.Element => {
  return (
    <Container size="sm">
      <Input type="text" placeholder="Email" />
      <InputGroup type="password" placeholder="Password" />
      <Button variant="success">{TEXT.LOGIN}</Button>
    </Container>
  );
};

export default LoginForm;
