import { Wrap } from '@chakra-ui/react';

// Model
import { CateEvent } from 'src/models';

// Components
import { Title } from 'src/components';
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
      <Title mb={5}>Events in {pageName}</Title>

      <Wrap className="cat_events">
        {(data || []).map((cateEvent: CateEvent) => (
          <CateEventCard key={cateEvent.id} cateEvent={cateEvent} />
        ))}
      </Wrap>
    </>
  );
};

export default CateEventList;
