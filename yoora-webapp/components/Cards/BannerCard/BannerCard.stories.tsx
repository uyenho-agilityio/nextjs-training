// Libs
import { Box } from '@chakra-ui/react';
import Storybook from '@storybook/react';

// Constant
import { DETAILS_CONTENT } from '@webapp/constants';

// Component
import { BannerCard } from '.';

export default {
  title: 'Components/Cards',
  component: BannerCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof BannerCard>;

const Template: Storybook.StoryFn<typeof BannerCard> = args => (
  <Box maxW="750px">
    <BannerCard {...DETAILS_CONTENT} {...args} />
  </Box>
);

export const Banner_Card = Template.bind({});
