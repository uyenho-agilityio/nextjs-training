import { Link as ChakraLink } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import Link from 'next/link';

// Model
import { Event } from 'src/models';

// Components
import { Loading } from 'src/components';
const Card = lazy(() => import('src/components').then(module => ({ default: module.Card })));

const EventCard = ({ event }: { event: Event }): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <ChakraLink as={Link} key={event.id} href={`/events/${event.id}`}>
        <Card {...event} width={400} height={350} />
      </ChakraLink>
    </Suspense>
  );
};

export default EventCard;
