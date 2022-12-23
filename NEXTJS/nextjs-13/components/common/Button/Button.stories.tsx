// Libs
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import Storybook from '@storybook/react';

// Constant
import { TEXT } from 'constants/index';

// Component
import { Button } from './Button';

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
} as Storybook.ComponentMeta<typeof Button>;

const Template: Storybook.ComponentStory<typeof Button> = args => <Button {...args} />;

export const Continue = Template.bind({});
Continue.args = {
  text: TEXT.CONTINUE,
  rightIcon: <ArrowForwardIcon />,
};

export const BackToCourses = Template.bind({});
BackToCourses.args = {
  leftIcon: <ArrowBackIcon />,
  text: TEXT.BACK_HOME,
  variant: 'ghost',
  bg: 'inherit',
};
