'use client';

// Lib
import dynamic from 'next/dynamic';

// Model
import { CateEvent } from 'models';

// Components
import { Text } from 'components';
const CateEventList = dynamic(() => import('components').then(mod => mod.CateEventList));

type CatEventsPageProps = {
  data: CateEvent[];
  pageName: string | string[];
};

const CatEventsPage = ({ data, pageName }: CatEventsPageProps): JSX.Element => {
  return (
    <>
      {data.length > 0 ? (
        <CateEventList data={data} pageName={pageName} />
      ) : (
        <Text textAlign="center">No Category of Events</Text>
      )}
    </>
  );
};

export default CatEventsPage;
