// Lib
import Storybook from '@storybook/react';

// Component
import { Select } from '.';

// Constant
import { LANGUAGE_OPTIONS } from '@webapp/constants';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Storybook.Meta<typeof Select>;

const Template: Storybook.StoryFn<typeof Select> = args => <Select {...args} />;

export const LanguageSelected = Template.bind({});
LanguageSelected.args = {
  options: LANGUAGE_OPTIONS,
};
