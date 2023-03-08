'use client';

// Libs
import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';
import { ReactNode } from 'react';

type WrapItemProps = {
  size?: string;
  variant?: string;
  children: ReactNode;
} & BoxProps;

export const CustomWrapItem = ({
  size,
  variant,
  children,
  ...props
}: WrapItemProps): JSX.Element => {
  const styles = useStyleConfig('WrapItem', { size, variant });

  return (
    <Box as="li" __css={styles} {...props}>
      {children}
    </Box>
  );
};
