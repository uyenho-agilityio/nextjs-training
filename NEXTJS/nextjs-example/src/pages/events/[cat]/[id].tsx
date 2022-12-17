import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

// Model
import { CateEvent } from 'src/models';

// Component
import { EventDetails } from 'src/components';

type EventDetailsPageProps = {
  data: CateEvent;
};

const EventDetailsPage = ({ data }: EventDetailsPageProps) => <EventDetails data={data} />;

export default EventDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await import('/data.json');

  const allPaths = result.allEvents.map(path => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  // console.log('getStaticPaths of id', allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<EventDetailsPageProps> = async (
  context: GetStaticPropsContext,
) => {
  // console.log('Context of id', context);

  const result = await import('data.json');
  const id = context.params && context.params.id;
  if (!id) return { notFound: true };

  const data = result.allEvents.find(ev => ev.id === id);
  if (!data) return { notFound: true };

  return {
    props: { data },
  };
};
