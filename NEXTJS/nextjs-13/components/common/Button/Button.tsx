// Libs
import { Button as ButtonChakra, ButtonProps as ButtonPropsChakra } from '@chakra-ui/react';
import React from 'react';

type ButtonProps = {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'long';
  onClick?: () => void;
  text?: string;
} & ButtonPropsChakra;

export const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  onClick,
  text,
  ...props
}): JSX.Element => (
  <ButtonChakra size={size} variant={variant} onClick={onClick} {...props}>
    {text}
  </ButtonChakra>
);
