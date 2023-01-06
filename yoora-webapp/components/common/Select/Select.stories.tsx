// Lib
import Storybook from '@storybook/react';

// Component
import { Select } from './Select';

// Constant
import { LANGUAGE_OPTIONS } from '@webapp/constants';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Select>;

const Template: Storybook.ComponentStory<typeof Select> = args => <Select {...args} />;

export const LanguageSelected = Template.bind({});
LanguageSelected.args = {
  options: LANGUAGE_OPTIONS,
};
