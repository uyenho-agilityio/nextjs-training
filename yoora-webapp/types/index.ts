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

export type ToastPosition =
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left';

export type ToastStatus = 'success' | 'error';
