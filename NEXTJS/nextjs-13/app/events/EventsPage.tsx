'use client';
// Lib
import dynamic from 'next/dynamic';

// Model
import { Event } from 'models';

// Components
import { Text } from '@webapp/components';
const EventList = dynamic(() => import('@webapp/components').then(mod => mod.EventList));

type EventsProps = {
  data: Event[];
};

const EventsPage = ({ data }: EventsProps): JSX.Element => {
  return (
    <>{data.length > 0 ? <EventList data={data} /> : <Text textAlign="center">No Events</Text>}</>
  );
};

export default EventsPage;
