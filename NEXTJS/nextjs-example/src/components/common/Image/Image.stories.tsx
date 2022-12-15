// Lib
import Storybook from '@storybook/react';

// Component
import { Image } from './Image';

// Constant
import { PAGE_404 } from 'src/constants';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.ComponentMeta<typeof Image>;

const Template: Storybook.ComponentStory<typeof Image> = args => <Image {...args} />;

export const NotFound = Template.bind({});
NotFound.args = { ...PAGE_404, src: 'https://i.ibb.co/Mn3JMQc/404.jpg' };
