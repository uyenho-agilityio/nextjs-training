'use client';

// Libs
import { Flex as ChakraFlex, FlexProps as ChakraFlexProps, useStyleConfig } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type FlexProps = {
  size?: string;
  variant?: string;
  children: ReactNode;
} & ChakraFlexProps;

export const Flex: React.FC<FlexProps> = ({ size, variant, children, ...props }): JSX.Element => {
  const styles = useStyleConfig('Flex', { size, variant });

  return (
    <ChakraFlex __css={styles} {...props}>
      {children}
    </ChakraFlex>
  );
};
