import { GetStaticProps } from 'next';

// Model
import { Event } from 'src/models';

// Constant
import { SEO_DATA } from 'src/constants';

// Components
import { EventList, SEO } from 'src/components';

type EventsPageProps = {
  data: Event[];
};

const EventsPage = ({ data }: EventsPageProps): JSX.Element => {
  return (
    <>
      <SEO data={SEO_DATA} />
      <EventList data={data} />
    </>
  );
};

export default EventsPage;

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  const data = await import('data.json');

  return {
    props: {
      data: data.events_categories,
    },
  };
};
