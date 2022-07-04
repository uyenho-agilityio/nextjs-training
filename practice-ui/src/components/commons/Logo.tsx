import React from 'react';
import { Image } from './Image';

interface LogoProps {
  logoUrl: string;
  brandUrl: string;
  className: string;
  logoName: string;
  brandName: string;
}

export const Logo: React.FC<LogoProps> = React.memo(
  ({ logoUrl, brandUrl, className, logoName, brandName }): JSX.Element => {
    return (
      <>
        <a href="#hero">
          <Image imageUrl={logoUrl} className={className} alt={logoName} />
        </a>
        <a href="#hero">
          <Image imageUrl={brandUrl} alt={brandName} />
        </a>
      </>
    );
  },
);
