// Lib
import Storybook from '@storybook/react';

// Mock
import { MESSAGE, TEXT } from '@webapp/__mocks__';

// Component
import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof Input>;

const Template: Storybook.StoryFn<typeof Input> = args => <Input {...args} />;

export const Name = Template.bind({});
Name.args = {
  placeholder: 'Your Name',
};

export const Error = Template.bind({});
Error.args = {
  value: TEXT.INVALID_EMAIL,
  error: MESSAGE.INVALID_EMAIL,
};
