'use client';

// Libs
import {
  Container,
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps,
} from '@chakra-ui/react';
import React from 'react';

type SpinnerProps = {
  variant?: 'default' | 'center';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  thickness?: string;
} & ChakraSpinnerProps;

export const Spinner: React.FC<SpinnerProps> = ({
  variant = 'default',
  size = 'lg',
  color = 'primary-btn-cl',
  thickness = '3px',
  ...props
}): JSX.Element => {
  return (
    <Container variant={variant}>
      <ChakraSpinner size={size} color={color} thickness={thickness} {...props} />
    </Container>
  );
};
