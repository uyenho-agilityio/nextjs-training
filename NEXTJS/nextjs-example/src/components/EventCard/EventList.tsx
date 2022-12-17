import { Flex } from '@chakra-ui/react';

// Model
import { Event } from 'src/models';

// Component
import EventCard from './EventCard';

const EventList = ({ data }: { data: Event[] }): JSX.Element => {
  return (
    <Flex justifyContent="space-around">
      {(data || []).map((event: Event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Flex>
  );
};

export default EventList;
