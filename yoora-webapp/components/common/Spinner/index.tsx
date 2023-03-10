'use client';

// Libs
import {
  Container,
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps,
} from '@chakra-ui/react';

type SpinnerProps = {
  variant?: 'default' | 'center';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  thickness?: string;
} & ChakraSpinnerProps;

export const Spinner = ({
  variant = 'default',
  size = 'lg',
  color = 'primary-btn-cl',
  thickness = '3px',
  ...props
}: SpinnerProps): JSX.Element => {
  return (
    <Container variant={variant}>
      <ChakraSpinner size={size} color={color} thickness={thickness} {...props} />
    </Container>
  );
};
