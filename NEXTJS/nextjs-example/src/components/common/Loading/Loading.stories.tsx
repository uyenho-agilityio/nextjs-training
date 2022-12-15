// Lib
import Storybook from '@storybook/react';

// Component
import { Loading } from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Loading>;

const Template: Storybook.ComponentStory<typeof Loading> = args => <Loading {...args} />;

export const Default = Template.bind({});
export const WithColor = Template.bind({});
WithColor.args = {
  color: 'secondary-cl',
  emptyColor: 'gray.200',
};
