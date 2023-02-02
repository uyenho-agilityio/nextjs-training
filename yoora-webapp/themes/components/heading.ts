export const Heading = {
  baseStyle: {
    color: 'inherit',
    fontWeight: 'bold',
  },

  sizes: {
    default: {
      fontSize: { base: 'heading.sm', lg: 'heading.lg' },
      lineHeight: { base: 'heading.sm', lg: 'heading.xl' },
      letterSpacing: { base: 'heading.wide', lg: 'heading.tight' },
    },

    h1: {
      fontSize: { base: 'heading.md', lg: 'heading.xl' },
      lineHeight: { base: 'heading.md', lg: 'heading.2xl' },
      letterSpacing: { base: 'heading.normal', lg: 'heading.tighter' },
    },

    h2: {
      fontSize: { base: 'heading.md', lg: 'heading.lg' },
      lineHeight: { base: 'heading.md', lg: 'heading.xl' },
      letterSpacing: { base: 'heading.normal', lg: '0' },
    },

    h3: {
      fontSize: { base: 'heading.md', lg: 'heading.lg' },
      lineHeight: { base: 'heading.md', lg: 'heading.lg' },
      letterSpacing: { base: 'heading.normal', lg: 'heading.tight' },
    },

    h4: {
      fontSize: { base: 'heading.xs', lg: 'heading.lg' },
      lineHeight: { base: 'heading.xs', lg: 'heading.lg' },
      letterSpacing: { base: 'heading.wider', lg: 'heading.tight' },
    },

    h5: {
      fontSize: { base: 'heading.xs', lg: 'heading.sm' },
      lineHeight: { base: 'heading.xs', lg: 'heading.sm' },
      letterSpacing: { base: 'heading.wider', lg: 'heading.wide' },
    },

    h6: {
      fontSize: { base: 'heading.2xs', lg: 'heading.sm' },
      lineHeight: { base: 'heading.xs', lg: 'heading.sm' },
      letterSpacing: { base: 'heading.wider', lg: 'heading.wide' },
    },

    h7: {
      fontSize: 'heading.2xs',
      lineHeight: 'heading.2xs',
      letterSpacing: 'heading.widest',
    },

    heading: {
      fontSize: { base: 'heading.lg', lg: 'heading.4xl' },
      lineHeight: { base: 'heading.md', lg: 'heading.2xl' },
      letterSpacing: { base: 'heading.tight', lg: 'heading.tighter' },
    },
  },

  variants: {
    default: {
      mt: { base: '48px', lg: '72px' },
      mb: { base: '12px', lg: '7px' },
    },

    'primary-title': {
      maxW: '850px',
      mb: '24px',
    },

    card: {
      mt: { base: '12px', lg: '16px' },
      mb: { base: '16px', lg: '24px' },
    },
  },

  defaultProps: {
    size: 'default',
  },
};
