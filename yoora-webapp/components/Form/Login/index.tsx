'use client';

// Libs
import { Container, Box } from '@chakra-ui/react';
import Image from 'next/image';

// Constants
import { LOGO, TEXT } from '@webapp/constants';

// Hook
import { useAuth } from '@webapp/hooks';

// Components
import { Title, Input, InputGroup, Button } from '@webapp/components';

const LoginForm = (): JSX.Element => {
  const { state, handleChangeInput, handleValidateInput, handleSubmit } = useAuth();
  const { email, password, error, loading } = state;

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
        chakraInputProps={{ variant: 'login-form' }}
        formControlProps={{
          pos: 'relative',
          _focusWithin: { color: 'primary-btn-cl' },
        }}
        type="text"
        text="Email *"
        onChange={e => handleChangeInput(e, 'email')}
        onBlur={e => handleValidateInput(e, 'email')}
        error={error.email}
      />
      <InputGroup
        chakraInputProps={{ variant: 'login-form' }}
        chakraInputElementProps={{ mr: 2, pb: 3 }}
        formControlProps={{
          pos: 'relative',
          _focusWithin: { color: 'primary-btn-cl' },
        }}
        type="password"
        text="Password *"
        onChange={e => handleChangeInput(e, 'password')}
        onBlur={e => handleValidateInput(e, 'password')}
        error={error.password}
      />
      <Button
        variant="submit"
        type="submit"
        onClick={handleSubmit}
        isLoading={loading}
        isDisabled={!email || !password || !!error.email || !!error.password}
      >
        {TEXT.LOGIN}
      </Button>
    </Container>
  );
};

export default LoginForm;
