import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

// Model
import { CateEvent } from '@webapp/models';

// Component
import { Card } from '@webapp/components';

const CateEventCard = ({ cateEvent }: { cateEvent: CateEvent }): JSX.Element => {
  const { id, city } = cateEvent;

  return (
    <ChakraLink as={Link} key={id} href={`/events/${city}/${id}`}>
      <Card {...cateEvent} width={300} height={300} />
    </ChakraLink>
  );
};

export default CateEventCard;
