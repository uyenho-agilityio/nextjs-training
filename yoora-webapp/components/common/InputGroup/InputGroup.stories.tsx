// Lib
import Storybook from '@storybook/react';

// Constant
import { HERO_CONTENT } from '@webapp/constants';

// Components
import { InputGroup, Button } from '@webapp/components';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof InputGroup>;

const Template: Storybook.StoryFn<typeof InputGroup> = args => <InputGroup {...args} />;

export const WithPasswordButton = Template.bind({});
WithPasswordButton.args = {
  type: 'password',
  placeholder: 'Password',
};

export const WithTextButton = Template.bind({});
WithTextButton.args = {
  type: 'text',
  placeholder: HERO_CONTENT.INPUT,
  rightElement: (
    <Button variant="success" pos="absolute" right={{ lg: '3%' }}>
      {HERO_CONTENT.BUTTON}
    </Button>
  ),
};
