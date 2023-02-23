'use client';

// Libs
import { Container, Box } from '@chakra-ui/react';
import { FocusEvent } from 'react';
import Image from 'next/image';

// Constants
import { LOGO, TEXT } from '@webapp/constants';

// Hook
import { useAuth } from '@webapp/hooks';

// Components
import { Title, Input, InputGroup, Button } from '@webapp/components';

const LoginForm = (): JSX.Element => {
  const { state, emailRef, passwordRef, handleValidateInput, handleSubmitByKeyDown, handleSubmit } =
    useAuth();
  const { error, loading } = state;

  type InputType = 'email' | 'password';

  const handleInputValidate = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    handleValidateInput(e, name as InputType);
  };

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
        chakraInputProps={{ variant: 'login-form', autoFocus: true }}
        formControlProps={{
          pos: 'relative',
          _focusWithin: { color: 'primary-btn-cl' },
        }}
        type="text"
        text="Email *"
        onBlur={handleInputValidate}
        onKeyDown={handleSubmitByKeyDown}
        ref={emailRef}
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
        onBlur={handleInputValidate}
        onKeyDown={handleSubmitByKeyDown}
        ref={passwordRef}
        error={error.password}
      />
      <Button
        variant="submit"
        type="submit"
        onClick={handleSubmit}
        isLoading={loading}
        isDisabled={!!error.email || !!error.password}
      >
        {TEXT.LOGIN}
      </Button>
    </Container>
  );
};

export default LoginForm;
