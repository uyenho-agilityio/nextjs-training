export const TEXT = {
  LOGIN: 'Log in',
  LOGOUT: 'Log out',
  TRY_FOR_FREE: 'Try for Free',
  HEAD_BACK: "Let's Head Back!",
  SEND: 'Send message',
};

export const MESSAGE = {
  SEND_MESSAGE:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloribus facilis magnam ut cum unde, pariatur minima delectus quae nostrum suscipit animi repellat accusantium tenetur, velit error quod officiis minus!',
  NO_FEEDBACKS: 'No feedbacks',
  SUCCESS: 'Added this message successfully.',
  FAILURE: 'Failed to add this message.',
  INVALID_EMAIL_PASSWORD: 'Your email or password is incorrect!',
  LOGGED_IN: 'Logged in successfully!',
  LOGGED_OUT: 'Logged out successfully!',
  ERROR: 'Something went wrong. Please try again later!',
};

export const SEO_DATA = {
  title: 'Yoora Web Application',
  description: 'Build the landing page by NextJS 13 with app directory',
  icon: '/favicon.ico',
  url: 'https://yoora-webapp.vercel.app/',
  thumbnailUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png',
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export const API_PATH = {
  Messages: 'messages',
  Login: 'login',
  Logout: 'logout',
};
