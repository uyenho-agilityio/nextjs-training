export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CateEvent extends Event {
  city: string;
  emails_registered?: string[];
}
