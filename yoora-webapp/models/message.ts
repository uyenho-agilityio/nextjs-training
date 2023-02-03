import { ImageProps } from '@webapp/types';

export interface Message {
  id: string | null;
  name: string;
  email: string;
  message: string;
  avatar: ImageProps;
}
