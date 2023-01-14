// Lib
import { Box } from '@chakra-ui/react';
import Storybook from '@storybook/react';

// Constant
import { MORE_TOPICS_CONTENT } from '@webapp/constants';

// Component
import { MoreTopicsCard } from '.';

export default {
  title: 'Components/Cards',
  component: MoreTopicsCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof MoreTopicsCard>;

const Template: Storybook.StoryFn<typeof MoreTopicsCard> = args => (
  <Box maxW="361px">
    <MoreTopicsCard {...MORE_TOPICS_CONTENT.CARDS[0]} {...args} />
  </Box>
);

export const MoreTopics_Card = Template.bind({});
