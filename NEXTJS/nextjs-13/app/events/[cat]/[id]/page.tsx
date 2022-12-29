// Lib
import { notFound } from 'next/navigation';

// Model
import { CateEvent } from 'models';

// Component
import EventDetailsPage from './EventDetailsPage';

type EventDetailsProps = {
  params: {
    id: string;
  };
};

export const generateStaticParams = async () => {
  const result: CateEvent[] = await import('data.json').then(result => result.allEvents);

  if (!result) {
    throw new Error('Failed to fetch data');
  }

  return result.map((path: CateEvent) => ({
    cat: path.city,
    id: path.id,
  }));
};

const Page = async ({ params: { id } }: EventDetailsProps): Promise<JSX.Element> => {
  // const id = params.id;

  const result: CateEvent[] = await import('data.json').then(result => result.allEvents);
  const data = result.find((ev: CateEvent) => ev.id === id);

  if (!data || Object.keys(data).length === 0) return notFound();

  return <EventDetailsPage data={data} />;
};

export default Page;
