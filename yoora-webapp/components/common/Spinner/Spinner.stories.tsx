// Lib
import Storybook from '@storybook/react';

// Component
import { Spinner } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Spinner>;

const Template: Storybook.ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Template.bind({});
