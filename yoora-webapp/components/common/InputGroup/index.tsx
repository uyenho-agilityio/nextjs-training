'use client';

// Libs
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
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
import dynamic from 'next/dynamic';

// Components
import { Button, Flex } from '@webapp/components';
const Text = dynamic(() => import('@webapp/components').then(mod => mod.Text), {
  ssr: false,
});

type InputProps = {
  ref?: RefObject<HTMLInputElement>;
  type: 'text' | 'email' | 'password';
  text?: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  chakraInputGroupProps?: ChakraInputGroupProps;
  formControlProps?: FormControlProps;
  formErrorMessageProps?: FormErrorMessageProps;
  chakraInputElementProps?: ChakraInputElementProps;
  rightElement?: ReactNode;
} & ChakraInputProps;

export const InputGroup = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleToggle = (): void => setShow(!show);

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
    chakraInputGroupProps,
    formControlProps,
    formErrorMessageProps,
    chakraInputElementProps,
    rightElement,
    ...inputProps
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
            defaultValue={defaultValue}
            placeholder={placeholder}
            value={value}
            onKeyDown={onKeyDown}
            onChange={onChange}
            onBlur={onBlur}
            {...inputProps}
          />
          {rightElement}
        </Flex>
      )}
    </ChakraInputGroup>
  );
});

InputGroup.displayName = 'InputGroup';
