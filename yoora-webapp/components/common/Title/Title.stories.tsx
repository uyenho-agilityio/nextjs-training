// Lib
import Storybook from '@storybook/react';

// Constant
import { TEXT } from '@webapp/constants';

// Component
import { Title } from '.';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof Title>;

const Template: Storybook.StoryFn<typeof Title> = args => <Title {...args} />;

export const HeadBack = Template.bind({});
HeadBack.args = {
  children: TEXT.HEAD_BACK,
};
