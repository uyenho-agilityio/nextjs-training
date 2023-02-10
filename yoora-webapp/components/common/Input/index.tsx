'use client';

// Libs
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { ChangeEvent, FocusEvent, RefObject } from 'react';

// Component
import { Text } from '@webapp/components';

type InputType = 'text' | 'email' | 'password';

type InputProps = {
  ref?: RefObject<HTMLInputElement>;
  type: InputType;
  text?: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  formControlProps?: FormControlProps;
  chakraInputProps?: ChakraInputProps;
};

export const Input = ({
  ref,
  type = 'text',
  text,
  defaultValue,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  formControlProps,
  chakraInputProps,
}: InputProps): JSX.Element => {
  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      {text && (
        <Text size="xs" variant="highlight">
          {text}
        </Text>
      )}
      <ChakraInput
        ref={ref}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...chakraInputProps}
      />
      {error && (
        <FormErrorMessage mt={-4} mb={5}>
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
