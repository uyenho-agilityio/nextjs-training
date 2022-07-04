import React, { ReactNode } from 'react';
import { TextVariants } from '~enums/variant';

export interface TextProps {
  className?: string;
  fs?: string;
  lh?: string;
  fontFamily?: string;
  children: ReactNode;
  variant?: TextVariants;
}

export const Text: React.FC<TextProps> = React.memo(
  ({ className, fs, lh, children, variant = TextVariants.Normal }): JSX.Element => (
    <p
      className={`${variant === TextVariants.Highlight ? `fw-bold` : ''} ${className}`}
      style={{
        fontSize: fs,
        lineHeight: lh,
      }}
    >
      {children}
    </p>
  ),
);
