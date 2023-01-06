'use client';

// Libs
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

type ButtonProps = {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'info' | 'success';
  onClick?: () => void;
} & ChakraButtonProps;

export const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  onClick,
  ...props
}): JSX.Element => <ChakraButton size={size} variant={variant} onClick={onClick} {...props} />;
