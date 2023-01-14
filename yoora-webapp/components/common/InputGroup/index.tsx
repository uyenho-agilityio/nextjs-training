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
  Flex,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ChangeEvent, FocusEvent, ReactNode, useState } from 'react';

// Component
import { Button } from '@webapp/components';

type InputProps = {
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  chakraInputGroupProps?: ChakraInputGroupProps;
  formControlProps?: FormControlProps;
  chakraInputProps?: ChakraInputProps;
  rightElement?: ReactNode;
};

export const InputGroup: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  chakraInputGroupProps,
  formControlProps,
  chakraInputProps,
  rightElement,
}): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleToggle = (): void => setShow(!show);

  return (
    <ChakraInputGroup {...chakraInputGroupProps}>
      {type === 'password' ? (
        <>
          <FormControl isInvalid={!!error} {...formControlProps}>
            <ChakraInput
              type={show ? 'text' : 'password'}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...chakraInputProps}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>
          <InputRightElement mr={2}>
            <Button
              variant="ghost"
              onClick={handleToggle}
              rightIcon={show ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </>
      ) : (
        <Flex direction={{ base: 'column', lg: 'row' }} align="center" pos="relative">
          <ChakraInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...chakraInputProps}
          />
          {rightElement}
        </Flex>
      )}
    </ChakraInputGroup>
  );
};
