import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

// Model
import { CateEvent } from 'src/models';

// Component
import { CateEventList } from 'src/components';

type CateEventsPageProps = {
  data: CateEvent[];
  pageName: string | string[];
};

const CateEventsPage = ({ data, pageName }: CateEventsPageProps): JSX.Element => {
  return <CateEventList data={data} pageName={pageName} />;
};

export default CateEventsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await import('data.json');

  const allPaths = result.events_categories.map(ev => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  // console.log('getStaticPaths of cat',allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CateEventsPageProps> = async (
  context: GetStaticPropsContext,
) => {
  // console.log('Context of cat', context);

  const result = await import('data.json');
  const id = context.params && context.params.cat;
  if (!id) return { notFound: true };

  const data = result.allEvents.filter(ev => ev.city === id);
  if (!data) return { notFound: true };

  return {
    props: { data, pageName: id },
  };
};
