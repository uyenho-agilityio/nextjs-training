import { ImageProps } from '@webapp/types';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User extends LoginPayload {
  id: string;
  avatar: ImageProps;
}
