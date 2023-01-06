// Lib
import Storybook from '@storybook/react';

// Component
import MainNavigation from './MainNavigation';

export default {
  title: 'Components/MainNavigation',
  component: MainNavigation,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof MainNavigation>;

const Template: Storybook.ComponentStory<typeof MainNavigation> = args => (
  <MainNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'xl',
};
