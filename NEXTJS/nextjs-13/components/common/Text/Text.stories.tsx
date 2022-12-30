// Lib
import Storybook from '@storybook/react';

// Component
import { Text } from './Text';

// Constant
import { TEXT } from '@webapp/constants';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Text>;

const Template: Storybook.ComponentStory<typeof Text> = args => <Text {...args} />;

export const Paragraph = Template.bind({});
Paragraph.args = {
  children: TEXT.SIGN_IN,
};
