'use client';

// Libs
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { ChangeEvent, FocusEvent, KeyboardEvent, forwardRef, RefObject } from 'react';
import dynamic from 'next/dynamic';

// Component
const Text = dynamic(() => import('@webapp/components').then(mod => mod.Text), {
  ssr: false,
});

type InputType = 'text' | 'email' | 'password';

type InputProps = {
  ref?: RefObject<HTMLInputElement>;
  type: InputType;
  text?: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  formControlProps?: FormControlProps;
  formErrorMessageProps?: FormErrorMessageProps;
} & ChakraInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const {
    type,
    text,
    defaultValue,
    placeholder,
    value,
    error,
    onKeyDown,
    onChange,
    onBlur,
    formControlProps,
    formErrorMessageProps,
    ...inputProps
  } = props;

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
        onKeyDown={onKeyDown}
        onChange={onChange}
        onBlur={onBlur}
        {...inputProps}
      />
      {error && <FormErrorMessage {...formErrorMessageProps}>{error}</FormErrorMessage>}
    </FormControl>
  );
});

Input.displayName = 'Input';
