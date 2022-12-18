// Libs
import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface TitleProps extends HeadingProps {
  size?: string;
  variant?: string;
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ size, variant, children, ...props }): JSX.Element => {
  return (
    <Heading size={size} variant={variant} {...props}>
      {children}
    </Heading>
  );
};
