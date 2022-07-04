import React from 'react';
import { ImgVariants } from '~enums/variant';

export interface ImgProps {
  imageUrl: string;
  className?: string;
  alt: string;
  height?: string;
  width?: string;
  variant?: ImgVariants;
}

export const Image: React.FC<ImgProps> = React.memo(
  ({ imageUrl, className = '', alt, height, width, variant = ImgVariants.Image }): JSX.Element => {
    return (
      <img
        srcSet={imageUrl}
        className={`${variant === ImgVariants.Icon ? 'navbar-toggler-icon' : `${className}`}`}
        alt={alt}
        style={{ width: width, height: height }}
      />
    );
  },
);
