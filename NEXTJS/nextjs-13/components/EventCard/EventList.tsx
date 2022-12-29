'use client';

import { Flex } from '@chakra-ui/react';

// Model
import { Event } from 'models';

// Component
import EventCard from './EventCard';

const EventList = ({ data }: { data: Event[] }): JSX.Element => {
  return (
    <Flex
      className="events"
      justify="space-around"
      flexDirection={{ base: 'column', md: 'row' }}
      w={{ base: '360px', md: 'full' }}
      mx="auto"
    >
      {(data || []).map((event: Event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Flex>
  );
};

export default EventList;
