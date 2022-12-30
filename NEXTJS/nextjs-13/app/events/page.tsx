// Libs
import { notFound } from 'next/navigation';

// Model
import { ApiPath, Event } from 'models';

// Constants
import { LOCAL_BASE_URL } from '@webapp/constants';

// Component
import EventsPage from './EventsPage';

const getData = async () => {
  // Generates server-side upon every request like getServerSideProps
  const response = await fetch(`${String(LOCAL_BASE_URL)}${ApiPath.Events}`, { cache: 'no-store' });

  if (!response) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const Page = async (): Promise<JSX.Element> => {
  // const data: Event[] = await getData();
  const response = await getData();
  const data: Event[] = response.data;

  if (!data) return notFound();

  return <EventsPage data={data} />;
};

export default Page;
