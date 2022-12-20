import { Link as ChakraLink } from '@chakra-ui/react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Model
import { Event } from 'src/models';

// Components
import { Loading } from 'src/components';
const Card = dynamic(() => import('src/components').then(module => module.Card));

const EventCard = ({ event }: { event: Event }): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <ChakraLink as={Link} key={event.id} href={`/events/${event.id}`}>
        <Card {...event} width={400} height={350} display="none" />
      </ChakraLink>
    </Suspense>
  );
};

export default EventCard;
