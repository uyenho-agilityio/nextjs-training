export const Button = {
  baseStyle: {
    color: 'primary-cl',
    borderRadius: '4px',
    height: '32px',
    px: '12px',
    py: '6px',
  },

  sizes: {
    default: {
      width: '64px',
    },

    sm: {
      width: '97px',
    },

    md: {
      width: 'width.xs',
      height: { base: 'height.xs', lg: 'height.sm' },
      borderRadius: 'base',
    },

    lg: {
      width: { base: 'width.sm', lg: 'width.2xs' },
      height: { base: 'height.xs', lg: 'height.sm' },
      borderRadius: 'base',
    },
  },

  variants: {
    default: {
      backgroundColor: 'secondary-cl',
      _hover: { color: 'primary-btn-cl', borderColor: 'primary-cl', border: '1px' },
      w: 'fit-content',
    },

    ghost: {
      _hover: { backgroundColor: 'none' },
      _focus: { backgroundColor: 'none' },
      w: 'fit-content',
    },

    success: {
      backgroundColor: 'primary-btn-cl',
      color: 'secondary-cl',
      _disabled: {
        _hover: {
          color: 'border-cl',
          border: '1px',
        },
      },
    },

    info: {
      backgroundColor: 'secondary-bg',
      color: 'white',
      w: 'fit-content',
    },

    submit: {
      backgroundColor: 'primary-btn-cl',
      color: 'secondary-cl',
      borderRadius: 'full',
      w: '100%',
      _disabled: {
        _hover: {
          color: 'border-cl',
          border: '1px',
        },
      },
    },

    showing: {
      backgroundColor: 'inherit',
      color: 'primary-btn-cl',
      _hover: { color: 'primary-btn-cl', borderColor: 'primary-cl', border: '1px' },
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
