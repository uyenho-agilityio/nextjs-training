'use client';

// Libs
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { ChangeEvent, FocusEvent } from 'react';

type TextareaProps = {
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
} & ChakraTextareaProps;

export const Textarea: React.FC<TextareaProps> = ({
  defaultValue,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  ...props
}: TextareaProps) => {
  return error ? (
    <FormControl isInvalid={!!error}>
      <ChakraTextarea
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
        resize="none"
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  ) : (
    <ChakraTextarea
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
      resize="none"
    />
  );
};
