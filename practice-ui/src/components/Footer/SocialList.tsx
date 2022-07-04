import React from 'react';
import { Image } from '~components/commons';

export type IconsProps = {
  id: number;
  iconUrl: string;
  alt: string;
  link: string;
};

const Socialist: React.FC<IconsProps> = (props): JSX.Element => {
  const { iconUrl, alt, link } = props;

  return (
    <a href={link} target="_blank">
      <Image imageUrl={iconUrl} alt={alt} className={'my-3 me-2 animation'} width={'40'} />
    </a>
  );
};

export default Socialist;
