// Lib
import Storybook from '@storybook/react';

// Constant
import { FEEDBACK_CONTENT } from '@webapp/constants';

// Component
import { Textarea } from '.';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Storybook.Meta<typeof Textarea>;

const Template: Storybook.StoryFn<typeof Textarea> = args => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: FEEDBACK_CONTENT.CARDS[0].message,
};
