// Lib
import { notFound } from 'next/navigation';

// Models
import { Event, CateEvent } from 'models';

// Component
import CatEventsPage from './CatEventsPage';

type CatEventsProps = {
  params: {
    cat: string;
  };
};

export const generateStaticParams = async () => {
  const result: Event[] = await import('data.json').then(result => result.events_categories);

  return result.map((ev: Event) => ({
    cat: ev.id.toString(),
  }));
};

const Page = async ({ params }: CatEventsProps): Promise<JSX.Element> => {
  const id = params.cat;
  const result: CateEvent[] = await import('data.json').then(result => result.allEvents);
  const data = result.filter((ev: CateEvent) => ev.city === id);

  if (!data || data.length === 0) return notFound();

  return <CatEventsPage data={data} pageName={id} />;
};

export default Page;
