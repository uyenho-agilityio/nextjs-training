// Lib
import Storybook from '@storybook/react';

// Component
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Input>;

const Template: Storybook.ComponentStory<typeof Input> = args => <Input {...args} />;

export const Name = Template.bind({});
Name.args = {
  placeholder: 'Your Name',
};

export const Error = Template.bind({});
Error.args = {
  value: 'user@com',
  error: 'true',
};
