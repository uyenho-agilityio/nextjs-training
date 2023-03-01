// Lib
import dynamic from 'next/dynamic';

// Component
const DetailsPage = dynamic(() => import('./DetailsPage'));

const Details = (): JSX.Element => {
  return <DetailsPage />;
};

export default Details;
