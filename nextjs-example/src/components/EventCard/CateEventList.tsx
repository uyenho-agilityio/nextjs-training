import { Wrap } from '@chakra-ui/react';

// Model
import { Event } from 'src/models';

// Components
import { Title } from 'src/components';
import CateEventCard from './EventCard';

const CateEventList = ({
  data,
  pageName,
}: {
  data: Event[];
  pageName: string | string[];
}): JSX.Element => {
  return (
    <>
      <Title mb={5}>Events in {pageName}</Title>

      <Wrap className="cat_events">
        {(data || []).map((event: Event) => (
          <CateEventCard key={event.id} event={event} />
        ))}
      </Wrap>
    </>
  );
};

export default CateEventList;
