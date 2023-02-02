export type ImageProps = {
  url?: string;
  alt: string;
  src: string;
  width: number;
  height: number;
};

export type SubMenuList = {
  id: number;
  subTitle: string;
};

export type MenuList = {
  id: number;
  title: string;
  subMenu: SubMenuList[];
};
