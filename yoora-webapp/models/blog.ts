interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface AvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SocialIconsProps {
  url: string;
  alt: string;
  src: string;
  width: number;
  height: number;
}

export interface Blog {
  id: string;
  tag: string;
  title: string;
  date: string;
  author: string;
  image: ImageProps;
  description: string;
  subTitle: string;
  paragraph: string;
  avatar: AvatarProps;
  name: string;
  position: string;
  socialIcons: SocialIconsProps[];
}
