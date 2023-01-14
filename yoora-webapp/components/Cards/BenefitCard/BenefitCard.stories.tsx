// Lib
import { Box } from '@chakra-ui/react';
import Storybook from '@storybook/react';

// Constant
import { BENEFIT_CONTENT } from '@webapp/constants';

// Component
import { BenefitCard } from '.';

export default {
  title: 'Components/Cards',
  component: BenefitCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Storybook.Meta<typeof BenefitCard>;

const Template: Storybook.StoryFn<typeof BenefitCard> = args => (
  <Box maxW="374px">
    <BenefitCard {...BENEFIT_CONTENT.CARDS[0]} {...args} />
  </Box>
);

export const Benefit_Card = Template.bind({});
