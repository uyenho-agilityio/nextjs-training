'use client';

// Lib
import { Wrap } from '@chakra-ui/react';

// Model
import { CateEvent } from '@webapp/models';

// Components
import { Title } from '@webapp/components';
import CateEventCard from './CateEventCard';

const CateEventList = ({
  data,
  pageName,
}: {
  data: CateEvent[];
  pageName: string | string[];
}): JSX.Element => {
  return (
    <>
      <Title mb={5} ml={{ base: '45px', md: '0' }}>
        Events in {pageName}
      </Title>

      <Wrap className="cat_events" justify={{ base: 'center', md: 'flex-start' }} spacing="32px">
        {(data || []).map((cateEvent: CateEvent) => (
          <CateEventCard key={cateEvent.id} cateEvent={cateEvent} />
        ))}
      </Wrap>
    </>
  );
};

export default CateEventList;
