'use client';

// Libs
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormControl,
} from '@chakra-ui/react';
import { ChangeEvent, FocusEvent, RefObject } from 'react';

type TextareaProps = {
  ref?: RefObject<HTMLTextAreaElement>;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  formErrorMessageProps?: FormErrorMessageProps;
} & ChakraTextareaProps;

export const Textarea = ({
  ref,
  defaultValue,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  formErrorMessageProps,
  ...props
}: TextareaProps) => {
  return (
    <FormControl isInvalid={!!error}>
      <ChakraTextarea
        ref={ref}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
        resize="none"
      />
      {error && <FormErrorMessage {...formErrorMessageProps}>{error}</FormErrorMessage>}
    </FormControl>
  );
};
