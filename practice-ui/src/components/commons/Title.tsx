import React, { ReactNode } from 'react';
import { TitleVariants } from '~enums/variant';

export interface TitleProps {
  className?: string;
  fs?: string;
  lh?: string;
  children: ReactNode;
  variant?: TitleVariants;
}

export const Title: React.FC<TitleProps> = React.memo(
  ({ className, fs, lh, children, variant = TitleVariants.Title }): JSX.Element => (
    <div
      className={`${variant === TitleVariants.Card ? `card-title` : ''} ${className}`}
      style={{
        fontSize: fs,
        lineHeight: lh,
      }}
    >
      {children}
    </div>
  ),
);
