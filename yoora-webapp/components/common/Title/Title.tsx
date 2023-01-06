'use client';

// Lib
import { Heading, HeadingProps } from '@chakra-ui/react';

type TitleProps = {
  size?: string;
  variant?: string;
} & HeadingProps;

export const Title: React.FC<TitleProps> = ({ size, variant, ...props }): JSX.Element => (
  <Heading size={size} variant={variant} {...props} />
);
