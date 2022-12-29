// Libs
import { notFound } from 'next/navigation';

// Model
import { ApiPath, Event } from 'models';

// Constants
import { BASE_URL } from 'constants/index';

// Component
import EventsPage from './EventsPage';

const getData = async () => {
  const response = await fetch(`${String(BASE_URL)}${ApiPath.Events}`);
  if (!response) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const Page = async (): Promise<JSX.Element> => {
  const data: Event[] = await getData();
  if (!data) return notFound();

  return <EventsPage data={data} />;
};

export default Page;
