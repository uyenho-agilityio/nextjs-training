// Lib
import Storybook from '@storybook/react';

// Component
import MainNavigation from '.';

export default {
  title: 'Components/MainNavigation',
  component: MainNavigation,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Storybook.Meta<typeof MainNavigation>;

const Template: Storybook.StoryFn<typeof MainNavigation> = args => <MainNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'xl',
  cursor: 'pointer',
};
