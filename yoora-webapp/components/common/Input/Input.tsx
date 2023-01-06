'use client';

// Libs
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { ChangeEvent, FocusEvent } from 'react';

type InputType = 'text' | 'email' | 'password';

type InputProps = {
  type: InputType;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  formControlProps?: FormControlProps;
  chakraInputProps?: ChakraInputProps;
};

export const Input: React.FC<InputProps> = ({
  type = 'text',
  defaultValue,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  formControlProps,
  chakraInputProps,
}): JSX.Element => {
  return error ? (
    <FormControl isInvalid={!!error} {...formControlProps}>
      <ChakraInput
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...chakraInputProps}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  ) : (
    <ChakraInput
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...chakraInputProps}
    />
  );
};
