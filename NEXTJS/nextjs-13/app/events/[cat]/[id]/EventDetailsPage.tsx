'use client';

// Lib
import dynamic from 'next/dynamic';

// Model
import { CateEvent } from 'models';

// Components
import { Text } from 'components';
const EventDetails = dynamic(() => import('components').then(mod => mod.EventDetails));

type EventDetailsPageProps = {
  data: CateEvent;
};

const EventDetailsPage = ({ data }: EventDetailsPageProps): JSX.Element => {
  return (
    <>
      {Object.keys(data).length > 0 ? (
        <EventDetails data={data} />
      ) : (
        <Text textAlign="center">No Event Details Found</Text>
      )}
    </>
  );
};

export default EventDetailsPage;
