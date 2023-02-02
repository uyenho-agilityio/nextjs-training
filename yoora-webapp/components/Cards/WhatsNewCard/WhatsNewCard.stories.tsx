// Lib
import { Box } from '@chakra-ui/react';
import Storybook from '@storybook/react';

// Constant
import { WHATS_NEW_CONTENT } from '@webapp/constants';

// Component
import { WhatsNewCard } from '.';

export default {
  title: 'Components/Cards',
  component: WhatsNewCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof WhatsNewCard>;

const Template: Storybook.StoryFn<typeof WhatsNewCard> = args => (
  <Box maxW="555px">
    <WhatsNewCard {...WHATS_NEW_CONTENT.CARDS[0]} {...args} />
  </Box>
);

export const WhatsNew_Card = Template.bind({});
