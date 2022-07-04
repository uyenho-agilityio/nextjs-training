import React from 'react';
import { BtnVariants } from '~enums/variant';

interface BtnProps {
  title: string;
  variant?: BtnVariants;
  className?: string;
  height?: string;
  width?: string;
}

export const Button: React.FC<BtnProps> = ({
  title,
  variant = BtnVariants.Primary,
  className,
  width,
  height,
}): JSX.Element => {
  return (
    <button className={`btn btn-${variant} ${className}`} style={{ width: width, height: height }}>
      {title}
    </button>
  );
};
