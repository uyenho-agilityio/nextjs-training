import { Link as ChakraLink } from '@chakra-ui/react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Model
import { CateEvent } from 'src/models';

// Components
import { Loading } from 'src/components';
const Card = dynamic(() => import('src/components').then(module => module.Card));

const CateEventCard = ({ cateEvent }: { cateEvent: CateEvent }): JSX.Element => {
  const { id, city } = cateEvent;

  return (
    <Suspense fallback={<Loading />}>
      <ChakraLink as={Link} key={id} href={`/events/${city}/${id}`}>
        <Card {...cateEvent} width={300} height={300} />
      </ChakraLink>
    </Suspense>
  );
};

export default CateEventCard;
