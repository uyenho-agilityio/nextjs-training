'use client';

// Lib
import { Heading, HeadingProps } from '@chakra-ui/react';

type TitleProps = {
  size?: string;
  variant?: string;
} & HeadingProps;

export const Title = ({ size, variant, ...props }: TitleProps): JSX.Element => (
  <Heading size={size} variant={variant} {...props} />
);
