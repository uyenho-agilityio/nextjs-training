import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

// Model
import { Event } from 'models';

// Component
import { Card } from '@webapp/components/common';

const EventCard = ({ event }: { event: Event }): JSX.Element => {
  return (
    <ChakraLink as={Link} key={event.id} href={`/events/${event.id}`}>
      <Card {...event} width={400} height={350} display="none" />
    </ChakraLink>
  );
};

export default EventCard;
