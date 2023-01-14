// Libs
import Storybook from '@storybook/react';

// Constants
import { FEATURES_CONTENT, REVENUE_CONTENT } from '@webapp/constants';

// Component
import { Tag } from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Storybook.Meta<typeof Tag>;

const Template: Storybook.StoryFn<typeof Tag> = args => <Tag {...args} />;

export const Sales = Template.bind({});
Sales.args = {
  text: FEATURES_CONTENT[0].tag,
  chakraTagProps: { bg: 'third-bg', px: 2, py: 1, borderRadius: '4px' },
};

export const Information = Template.bind({});
Information.args = {
  text: '07 Sep 2022,',
  extraText: 'by Joshua Nash',
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  text: 'Nellie Foster',
  subText: 'Founder & CEO, Foster Business Strategies',
  width: REVENUE_CONTENT.ITEMS[0].image.width,
  height: REVENUE_CONTENT.ITEMS[0].image.height,
  src: REVENUE_CONTENT.ITEMS[0].image.src,
  alt: REVENUE_CONTENT.ITEMS[0].image.alt,
  boxProps: { ml: 3 },
};
