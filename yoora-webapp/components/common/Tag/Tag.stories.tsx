// Libs
import Storybook from '@storybook/react';
import { FEATURES_CONTENT, REVENUE_CONTENT } from '@webapp/constants';

// Component
import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Tag>;

const Template: Storybook.ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Sales = Template.bind({});
Sales.args = {
  text: FEATURES_CONTENT.CARDS[0].tag,
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
