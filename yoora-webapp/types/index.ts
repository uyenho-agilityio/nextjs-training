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

// SSR: Server-side rendering
// SSG: Static-site generation
// ISR: Incremental Static Regeneration
export type Methods = 'SSR' | 'SSG' | 'ISR';

export type FetchingOptions = {
  endpoint: RequestInfo | URL;
  method: Methods;
};

export enum ToastPosition {
  Top = 'top',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  Bottom = 'bottom',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
}

export enum ToastStatus {
  Success = 'success',
  Error = 'error',
}

export enum ApiPath {
  Messages = 'messages',
  Login = 'login',
  Logout = 'logout',
}
