'use client';

// Libs
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup as ChakraInputGroup,
  InputGroupProps as ChakraInputGroupProps,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ChangeEvent, FocusEvent, useState } from 'react';

// Component
import { Button } from '@webapp/components';

type InputType = 'text' | 'email' | 'password';

type InputProps = {
  type: InputType;
  value?: string;
  error?: string;
  text?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  chakraInputGroupProps?: ChakraInputGroupProps;
  formControlProps?: FormControlProps;
  chakraInputProps?: ChakraInputProps;
};

export const InputGroup: React.FC<InputProps> = ({
  type = 'text',
  value,
  error,
  onChange,
  onBlur,
  text,
  chakraInputGroupProps,
  formControlProps,
  chakraInputProps,
}): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleShowPassword = (): void => setShow(!show);

  return (
    <ChakraInputGroup {...chakraInputGroupProps}>
      {type === 'password' ? (
        <>
          <FormControl isInvalid={!!error} {...formControlProps}>
            <ChakraInput
              type={show ? 'text' : 'password'}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...chakraInputProps}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>
          <InputRightElement mr={2}>
            <Button
              onClick={handleShowPassword}
              rightIcon={show ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </>
      ) : (
        <>
          <ChakraInput
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...chakraInputProps}
          />
          <InputRightElement mr={2}>
            <Button>{text}</Button>
          </InputRightElement>
        </>
      )}
    </ChakraInputGroup>
  );
};
