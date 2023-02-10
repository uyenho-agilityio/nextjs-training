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
  InputElementProps as ChakraInputElementProps,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  ReactNode,
  RefObject,
  useState,
} from 'react';

// Components
import { Button, Flex, Text } from '@webapp/components';

type InputProps = {
  ref?: RefObject<HTMLInputElement>;
  type: 'text' | 'email' | 'password';
  text?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  chakraInputGroupProps?: ChakraInputGroupProps;
  formControlProps?: FormControlProps;
  chakraInputProps?: ChakraInputProps;
  chakraInputElementProps?: ChakraInputElementProps;
  rightElement?: ReactNode;
};

export const InputGroup = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleToggle = (): void => setShow(!show);

  const {
    type,
    text,
    placeholder,
    value,
    error,
    onKeyDown,
    onChange,
    onBlur,
    chakraInputGroupProps,
    formControlProps,
    chakraInputProps,
    chakraInputElementProps,
    rightElement,
  } = props;

  return (
    <ChakraInputGroup {...chakraInputGroupProps}>
      {type === 'password' ? (
        <>
          <FormControl isInvalid={!!error} {...formControlProps}>
            {text && (
              <Text size="xs" variant="highlight">
                {text}
              </Text>
            )}
            <ChakraInput
              ref={ref}
              type={show ? 'text' : 'password'}
              placeholder={placeholder}
              value={value}
              onKeyDown={onKeyDown}
              onChange={onChange}
              onBlur={onBlur}
              {...chakraInputProps}
            />
            {error && (
              <FormErrorMessage mt={-4} mb={10}>
                {error}
              </FormErrorMessage>
            )}
          </FormControl>
          <InputRightElement {...chakraInputElementProps}>
            <Button
              variant="ghost"
              onClick={handleToggle}
              rightIcon={show ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </>
      ) : (
        <Flex variant="responsive" pos="relative">
          <ChakraInput
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            onKeyDown={onKeyDown}
            onChange={onChange}
            onBlur={onBlur}
            {...chakraInputProps}
          />
          {rightElement}
        </Flex>
      )}
    </ChakraInputGroup>
  );
});

InputGroup.displayName = 'InputGroup';
