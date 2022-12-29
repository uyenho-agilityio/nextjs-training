import { Box } from '@chakra-ui/react';

// Model
import { CateEvent } from 'models';

// Components
import { Image, Text, Title } from 'components';

const EventDetails = ({ data }: { data: CateEvent }): JSX.Element => {
  return (
    <Box className="event_details_page">
      <Title> {data.title} </Title>
      <Image src={data.image} alt={data.title} width={1000} height={500} />
      <Text> {data.description} </Text>

      <Title size="md" mt={5}>
        Get Registered for this event!
      </Title>
    </Box>
  );
};

export default EventDetails;
