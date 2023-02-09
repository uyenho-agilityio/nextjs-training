// Libs
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// Type
import { Message } from '@webapp/models';

// Service
import { fetchMessages } from '@webapp/services';

// Component
const HomePage = dynamic(() => import('./HomePage'));

const Home = (): JSX.Element => {
  // const Home = async (): Promise<JSX.Element> => {
  // const dataRes = await fetchMessages('SSR');
  // const data: Message[] = dataRes.data;

  // if (!data) {
  //   notFound();
  // }

  // return <HomePage data={data} />;
  return <HomePage />;
};

export default Home;
