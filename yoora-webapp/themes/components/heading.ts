export const Heading = {
  baseStyle: {
    color: 'inherit',
    fontWeight: 'bold',
  },

  sizes: {
    default: {
      fontSize: { base: 'heading.xs', lg: 'heading.md' },
      lineHeight: { base: 'heading.xs', lg: 'heading.md' },
    },

    h1: {
      fontSize: { base: 'heading.md', lg: 'heading.xl' },
      lineHeight: { base: 'heading.sm', lg: 'heading.xl' },
    },

    h2: {
      fontSize: { base: 'heading.sm', lg: 'heading.lg' },
      lineHeight: { base: 'heading.sm', lg: 'heading.xl' },
    },

    h3: {
      fontSize: { base: 'heading.sm', lg: 'heading.md' },
      lineHeight: { base: 'heading.sm', lg: 'heading.lg' },
      color: 'secondary-cl',
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
    // variant: 'default',
  },
};
