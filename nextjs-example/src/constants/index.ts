export const VERCEL_LOGO = {
  alt: 'Vercel Logo',
  src: '/images/vercel.svg',
  width: 72,
  height: 16,
};

export const COURSE_LOGO = {
  alt: 'Logo',
  src: '/images/logo.svg',
  width: 32,
  height: 32,
};

export const AVATAR = {
  alt: 'Avatar',
  src: '/images/avatar.jpg',
  width: 40,
  height: 40,
};

export const PAGE_404 = {
  alt: '404 Page',
  src: '/images/404.jpg',
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
  {
    label: 'NextJS',
    path: '/nextjs',
  },
];

export const MESSAGES = {
  NETWORK_ERROR: 'Network error. Please try again later.',
  ERROR: 'Something went wrong!',
};

export const TEXT = {
  CONTINUE: 'Continue',
  BACK_TO_COURSE: 'Back to Course',
  BACK_HOME: 'BACK TO HOME',
  HEAD_BACK: "Let's Head Back!",
  SIGN_IN: 'Sign in',
  ACADEMY: 'Academy',
};

export const SEO_DATA = {
  title: 'NextJS Training',
  description: 'Do examples to understand NextJS',
  icon: '/images/favicon.ico',
  url: 'https://nextjs-examples-training.vercel.app/',
  thumbnailUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png',
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
