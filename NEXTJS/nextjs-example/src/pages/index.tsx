import { AxiosResponse } from 'axios';
import { GetServerSideProps, GetStaticProps } from 'next';

// Model
import { ApiPath, Event, NextPageWithLayout } from 'src/models';

// Constant
import { SEO_DATA } from 'src/constants';

// service
import eventService from 'src/services';

// Components
import { EventList, SEO } from 'src/components';

type EventsPageProps = {
  data: Event[];
};

const Home = ({ data }: EventsPageProps): JSX.Element => {
  return (
    <>
      <SEO data={SEO_DATA} />
      <EventList data={data} />
    </>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
//   const response = await eventService.get<AxiosResponse<Event[]>>(ApiPath.Events);
//   const result = response.data;

//   return {
//     props: {
//       data: result,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps<EventsPageProps> = async () => {
  const response = await eventService.get<AxiosResponse<Event[]>>(ApiPath.Events);
  const result = response.data;

  return {
    props: {
      data: result,
    },
  };
};
