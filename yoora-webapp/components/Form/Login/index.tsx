'use client';

// Libs
import { Container, Box } from '@chakra-ui/react';
import Image from 'next/image';

// Constants
import { LOGO, TEXT } from '@webapp/constants';

// Components
import { Title, Input, InputGroup, Button } from '@webapp/components';

const LoginForm = (): JSX.Element => {
  return (
    <Container
      className="login-form"
      size="sm"
      variant="default"
      display="flex"
      flexDirection="column"
    >
      <Box mb="32px">
        <Image {...LOGO} priority />
      </Box>
      <Title size="h3" mb="50px" textAlign="center">
        {TEXT.LOGIN}
      </Title>

      <Input
        type="text"
        text="Email *"
        placeholder="Email"
        chakraInputProps={{ variant: 'login-form' }}
        formControlProps={{
          pos: 'relative',
          _focusWithin: { color: 'primary-btn-cl' },
        }}
      />
      <InputGroup
        type="password"
        text="Password *"
        placeholder="Password"
        chakraInputProps={{ variant: 'login-form' }}
        chakraInputElementProps={{ mr: 2, pb: 3 }}
        formControlProps={{
          pos: 'relative',
          _focusWithin: { color: 'primary-btn-cl' },
        }}
      />
      <Button type="submit" variant="submit">
        {TEXT.LOGIN}
      </Button>
    </Container>
  );
};

export default LoginForm;
