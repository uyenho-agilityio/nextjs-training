'use client';

// Lib
import { Text as ChakraText, TextProps as ChakraTextProps } from '@chakra-ui/react';

type TextProps = {
  size?: string;
  variant?: string;
} & ChakraTextProps;

export const Text = ({ size, variant, ...props }: TextProps): JSX.Element => (
  <ChakraText size={size} variant={variant} {...props} />
);
