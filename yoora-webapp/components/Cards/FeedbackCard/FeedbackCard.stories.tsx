// Lib
import { Box } from '@chakra-ui/react';
import Storybook from '@storybook/react';

// Constant
import { FEEDBACK_CONTENT } from '@webapp/constants';

// Component
import { FeedbackCard } from '.';

export default {
  title: 'Components/Cards',
  component: FeedbackCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof FeedbackCard>;

const Template: Storybook.StoryFn<typeof FeedbackCard> = args => (
  <Box maxW="360px">
    <FeedbackCard {...FEEDBACK_CONTENT.CARDS[0]} {...args} />
  </Box>
);

export const Feedback_Card = Template.bind({});
