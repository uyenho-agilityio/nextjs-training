// Lib
import Storybook from '@storybook/react';

// Constant
import { TEXT } from '@webapp/constants';

// Component
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Text>;

const Template: Storybook.ComponentStory<typeof Text> = args => <Text {...args} />;

export const LogIn = Template.bind({});
LogIn.args = {
  children: TEXT.LOGIN,
};
