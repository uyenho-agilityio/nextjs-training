export const Heading = {
  baseStyle: {
    color: 'black',
    fontWeight: 'bold',
  },

  sizes: {
    default: {
      fontSize: { base: 'heading.extraSmall', md: 'heading.small' },
      lineHeight: { base: 'heading.extraSmall', md: 'heading.small' },
    },

    large: {
      fontSize: { base: 'heading.medium', md: 'heading.large' },
      color: 'white',
    },
  },

  variants: {
    default: {
      mb: 'margin.extraSmall',
    },

    animation: {
      textAlign: 'center',
      pt: '1',
      borderRadius: 'full',
      boxSize: '24px',
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
