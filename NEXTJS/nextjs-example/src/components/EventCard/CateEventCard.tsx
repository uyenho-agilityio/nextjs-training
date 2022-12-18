import { Link as ChakraLink } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import Link from 'next/link';

// Model
import { CateEvent } from 'src/models';

// Components
import { Loading } from 'src/components';
const Card = lazy(() => import('src/components').then(module => ({ default: module.Card })));

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
