// Libs
import { Container, Spinner, SpinnerProps as SpinnerPropsChakra } from '@chakra-ui/react';
import React from 'react';

type SpinnerProps = {
  variant?: 'default' | 'center';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  thickness?: string;
} & SpinnerPropsChakra;

export const Loading: React.FC<SpinnerProps> = ({
  variant = 'default',
  size = 'lg',
  color = 'primary-cl',
  thickness = '3px',
  ...props
}): JSX.Element => {
  return (
    <Container variant={variant}>
      <Spinner size={size} color={color} thickness={thickness} {...props} />
    </Container>
  );
};
