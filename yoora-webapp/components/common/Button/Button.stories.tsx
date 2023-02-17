// Libs
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Storybook from '@storybook/react';

// Constant
import { TEXT } from '@webapp/constants';

// Component
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: ['ghost', 'outline', 'solid', 'link', 'unstyled'],
      control: { type: 'radio' },
    },
  },
} as Storybook.Meta<typeof Button>;

const Template: Storybook.StoryFn<typeof Button> = args => <Button {...args} />;

export const TryForFree = Template.bind({});
TryForFree.args = {
  children: TEXT.TRY_FOR_FREE,
  size: 'sm',
  variant: 'info',
};

export const SendMessage = Template.bind({});
SendMessage.args = {
  children: TEXT.SEND,
  rightIcon: <ArrowForwardIcon />,
  variant: 'success',
  size: 'md',
};
