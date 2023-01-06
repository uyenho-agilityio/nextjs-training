// Lib
import Storybook from '@storybook/react';

// Constant
import { TEXT } from '@webapp/constants';

// Component
import { Title } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Title>;

const Template: Storybook.ComponentStory<typeof Title> = args => <Title {...args} />;

export const HeadBack = Template.bind({});
HeadBack.args = {
  children: TEXT.HEAD_BACK,
};
