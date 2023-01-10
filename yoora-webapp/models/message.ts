interface AvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Message {
  id: string;
  message: string;
  name: string;
  email: string;
  avatar?: AvatarProps;
}
