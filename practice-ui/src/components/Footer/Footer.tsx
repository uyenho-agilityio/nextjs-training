import React from 'react';
import Socialist, { IconsProps } from './SocialList';
import { Logo, Title } from '~components/commons';
import { BRAND_FOOTER_URL, FOOTER_TITLE, LOGO_FOOTER_URL, SOCIAL_IMAGE_LIST } from '~constants/footer';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = (): JSX.Element => {
  const socialList = SOCIAL_IMAGE_LIST.map((item: IconsProps): JSX.Element => {
    return <Socialist key={item.id} {...item} />;
  });

  return (
    <div className="text-center d-xl-flex align-items-center" id="resources">
      <div>
        {/* Logos */}
        <Logo
          logoUrl={LOGO_FOOTER_URL}
          className={'me-2'}
          logoName={'footer-logo'}
          brandUrl={BRAND_FOOTER_URL}
          brandName={'footer-brand'}
        />

        {/* Social Icons */}
        <div className="mb-3">{socialList}</div>
      </div>

      {/* Footer Title */}
      <Title children={FOOTER_TITLE} className={'ms-auto'} />
    </div>
  );
};
