// Lib
import Storybook from '@storybook/react';

// Component
import { Spinner } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof Spinner>;

const Template: Storybook.StoryFn<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Template.bind({});
