export const LOGO = {
  alt: 'Logo',
  src: '/images/logo.svg',
  width: 32,
  height: 32,
};

export const PAGE_404 = {
  src: '/images/404.jpg',
  alt: '404 Page',
  width: 400,
  height: 400,
};

export const PAGE_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  EVENTS: '/events',
};

export const ROUTE_LIST = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Events',
    path: '/events',
  },
  {
    label: 'About',
    path: '/about',
  },
];

export const MESSAGES = {
  NETWORK_ERROR: 'Network error. Please try again later.',
  ERROR: 'Something went wrong!',
};

export const TEXT = {
  CONTINUE: 'Continue',
  BACK_HOME: 'BACK TO HOME',
  HEAD_BACK: "Let's Head Back!",
  SIGN_IN: 'Sign in',
  ACADEMY: 'Academy',
};

export const SEO_DATA = {
  title: 'NextJS Training with app/ directory',
  description: 'Do examples to understand NextJS 13',
  icon: '/favicon.ico',
  url: 'https://nextjs-examples-training.vercel.app/',
  thumbnailUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png',
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const LOCAL_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_BASE_URL;
