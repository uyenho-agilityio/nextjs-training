import React from 'react';
import { Title, Text, Button, Image } from '~components/commons';
import { BtnVariants } from '~enums/variant';
import {
  GROUP_DESKTOP_URL,
  GROUP_MOBILE_URL,
  GROUP_TABLET_URL,
  GROUP_URL,
  HERO_BTN,
  HERO_HEADER,
  HERO_TEXT,
  TRIANGLE_URL,
  VIDEO_URL,
} from '~constants/header';

const Hero: React.FC = (): JSX.Element => {
  return (
    <>
      <div
        className="hero d-flex flex-column-reverse flex-xl-row align-items-center text-center text-xl-start my-5 py-5"
        id="hero"
      >
        <div className="my-4 pt-4 pt-xl-0 me-xl-5 pe-xl-5">
          <Title children={HERO_HEADER} className="hero-header fw-bold mb-3" />
          <Text children={HERO_TEXT} className="hero-text mb-3" fs={'18px'} lh={'28px'} />

          <Button title={HERO_BTN.GET_STARTED} variant={BtnVariants.Primary} className="fw-bold px-3 py-2" />
          <Image imageUrl={TRIANGLE_URL} className="ms-4" alt="triangle-image" />
          <a href={VIDEO_URL} target="_blank" className="btn-video fw-bold text-decoration-underline border-0 ms-2">
            {HERO_BTN.WATCH_THE_VIDEO}
          </a>
        </div>

        <div className="img-fluid text-center text-xl-end">
          <picture>
            <source media="(max-width: 400px)" srcSet={GROUP_MOBILE_URL} />
            <source media="(max-width: 768px)" srcSet={GROUP_TABLET_URL} />
            <source srcSet={GROUP_DESKTOP_URL} />
            <Image imageUrl={GROUP_URL} alt="group-image" />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Hero;
