export const Text = {
  sizes: {
    default: {
      fontSize: { base: 'text.sm', lg: 'text.md' },
      lineHeight: { base: 'text.lg', lg: 'text.xl' },
    },

    xs: {
      fontSize: { base: 'text.xs', lg: 'text.sm' },
      lineHeight: { base: 'text.xs', lg: 'text.sm' },
    },

    sm: {
      fontSize: { base: 'text.sm', lg: 'text.xl' },
      lineHeight: { base: 'text.sm', lg: 'text.xl' },
    },

    md: {
      fontSize: { base: 'text.md', lg: 'text.lg' },
      lineHeight: { base: 'text.md', lg: 'text.lg' },
    },

    lg: {
      fontSize: 'text.lg',
      lineHeight: 'text.xs',
      letterSpacing: 'heading.widest',
    },
  },

  variants: {
    subTitle: {
      fontWeight: 'bold',
    },

    description: {
      mt: { base: '8px', lg: '16px' },
      mb: { base: '16px', lg: '24px' },
    },

    subText: {
      fontWeight: 'light',
      color: 'third-cl',
    },

    highlight: {
      pos: 'absolute',
      top: '-10px',
      ml: '10px',
      px: '5px',
      w: 'fit-content',
      bgColor: 'secondary-cl',
      zIndex: '1',
    },
  },

  defaultProps: {
    size: 'default',
  },
};
