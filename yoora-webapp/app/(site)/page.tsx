// Lib
import dynamic from 'next/dynamic';

// Component
const HomePage = dynamic(() => import('./HomePage'));

const Home = (): JSX.Element => {
  return <HomePage />;
};

export default Home;
