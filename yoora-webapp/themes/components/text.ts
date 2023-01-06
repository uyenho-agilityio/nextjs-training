export const Text = {
  sizes: {
    default: {
      fontSize: 'text.xs',
      lineHeight: 'text.md',
    },

    xs: {
      fontSize: 'text.xs',
      lineHeight: 'text.lg',
    },

    sm: {
      fontSize: 'text.sm',
      lineHeight: 'text.sm',
    },

    md: {
      // fontSize: 'text.sm',
      // lineHeight: 'text.sm',
    },
  },

  variants: {
    center: {
      maxW: 'width.extraHuge',
      mx: 'auto',
    },

    filter: {
      pos: 'absolute',
      top: '-10px',
      ml: '10px',
      px: '5px',
      w: 'fit-content',
      bgColor: 'primary-bg',
      zIndex: '1',
    },

    uppercase: {
      color: 'primary-bg',
      textTransform: 'uppercase',
    },
  },

  defaultProps: {
    size: 'default',
    // variant: 'default',
  },
};
