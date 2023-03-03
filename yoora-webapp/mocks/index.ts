export const TEXT = {
  NAME_KEY: 'name',
  MESSAGE_KEY: 'message',
  EMAIL_KEY: 'email',
  PWD_KEY: 'password',
  INVALID_NAME: 'User',
  INVALID_EMAIL: 'user@com',
  INVALID_PWD: 'user@123',
  VALID_NAME: 'Guest',
  VALID_EMAIL: 'user@api.com',
  VALID_PWD: 'User@123',
};

export const MESSAGE = {
  INVALID_MESSAGE_INPUT: 'Lorem ipsum dolor.',
  VALID_MESSAGE_INPUT:
    'Officia doloribus facilis magnam ut cum unde, pariatur minima delectus quae nostrum suscipit animi repellat accusantium tenetur, velit error quod officiis minus!',
  INVALID_EMAIL: 'Email is invalid',
  INVALID_PWD: 'Password is invalid',
  INVALID_NAME: 'Name should be a minimum of five characters in length',
  INVALID_MESSAGE: 'Message should be at least 40 characters',
  REQUIRED_PWD: 'Password is required',
};

export const USER_DATA = {
  id: '1',
  email: 'user@api.com',
  password: 'User@123',
  avatar: {
    src: '/images/feedback-section/default-avatar-1.svg',
    alt: 'avatar',
    width: 48,
    height: 48,
  },
};

export const LOGIN_DATA = {
  email: 'user@api.com',
  password: 'User@123',
};

export const FEEDBACK_DATA = [
  {
    id: '1675077820074',
    name: 'Lola Ross',
    email: 'Digital Marketing Director',
    message:
      'The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.',
    avatar: {
      src: '/images/feedback-section/avatar-1.svg',
      alt: 'avatar',
      width: 48,
      height: 48,
    },
  },
  {
    id: '1675137802940',
    name: 'Daisy Phelps',
    email: 'Speaker and Author, Lifeiseasy',
    message:
      'It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.',
    avatar: {
      src: '/images/feedback-section/avatar-2.svg',
      alt: 'avatar',
      width: 48,
      height: 48,
    },
  },
];
