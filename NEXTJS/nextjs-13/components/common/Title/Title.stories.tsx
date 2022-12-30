// Lib
import Storybook from '@storybook/react';

// Components
import { Title } from './Title';

// Constants
import { TEXT } from '@webapp/constants';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Title>;

const Template: Storybook.ComponentStory<typeof Title> = args => <Title {...args} />;

export const Academy = Template.bind({});
Academy.args = {
  children: TEXT.ACADEMY,
};
