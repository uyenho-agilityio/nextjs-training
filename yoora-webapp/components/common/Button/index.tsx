'use client';

// Libs
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

type ButtonProps = {
  size?: 'lg' | 'md' | 'sm' | 'xs' | string;
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'info' | 'success' | string;
  onClick?: () => void;
} & ChakraButtonProps;

export const Button = ({ size, variant, onClick, ...props }: ButtonProps): JSX.Element => (
  <ChakraButton size={size} variant={variant} onClick={onClick} {...props} />
);
