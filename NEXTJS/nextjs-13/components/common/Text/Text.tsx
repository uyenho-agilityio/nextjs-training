// Libs
import { Text as TextChakra, TextProps as TextPropsChakra } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface TextProps extends TextPropsChakra {
  size?: string;
  variant?: string;
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({ size, variant, children, ...props }): JSX.Element => {
  return (
    <TextChakra size={size} variant={variant} {...props}>
      {children}
    </TextChakra>
  );
};
