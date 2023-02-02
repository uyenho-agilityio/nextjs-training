// Lib
import { Box } from '@chakra-ui/react';
import Storybook from '@storybook/react';

// Constant
import { FEATURES_CONTENT } from '@webapp/constants';

// Component
import { FeaturesCard } from '.';

export default {
  title: 'Components/Cards',
  component: FeaturesCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof FeaturesCard>;

const Template: Storybook.StoryFn<typeof FeaturesCard> = args => (
  <Box maxW="555px">
    <FeaturesCard {...FEATURES_CONTENT[0]} {...args} />
  </Box>
);

export const Features_Card = Template.bind({});
