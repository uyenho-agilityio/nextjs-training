// Lib
import Storybook from '@storybook/react';

// Constant
import { TEXT } from '@webapp/constants';

// Component
import { InputGroup } from './InputGroup';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof InputGroup>;

const Template: Storybook.ComponentStory<typeof InputGroup> = args => <InputGroup {...args} />;

export const WithPasswordButton = Template.bind({});
WithPasswordButton.args = {
  type: 'password',
};

export const WithTextButton = Template.bind({});
WithTextButton.args = {
  type: 'text',
  text: TEXT.TRY_FOR_FREE,
};
