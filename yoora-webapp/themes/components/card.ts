import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys,
);

const variants = {
  transparent: definePartsStyle({
    container: {
      bg: 'none',
    },
  }),
};

export const Card = defineMultiStyleConfig({ variants });
