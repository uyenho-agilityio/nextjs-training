export type imageProps = {
  url: string;
  alt: string;
  src: string;
  width: number;
  height: number;
};

export type subMenuList = {
  id: number;
  subTitle: string;
};

export type menuList = {
  id: number;
  title: string;
  subMenu: subMenuList[];
};
