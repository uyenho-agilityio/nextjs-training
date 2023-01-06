// Lib
import Storybook from '@storybook/react';

// Constant
import { FEEDBACK_CONTENT } from '@webapp/constants';

// Component
import { TextArea } from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof TextArea>;

const Template: Storybook.ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: FEEDBACK_CONTENT.CARDS[0].message,
};
