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
      height: '42px',
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
      bg: 'secondary-cl',
      _hover: { bg: 'none', color: 'primary-btn-cl', borderColor: 'primary-cl', border: '1px' },
      w: 'fit-content',
    },

    ghost: {
      _hover: { bg: 'none' },
      _focus: { bg: 'none' },
      w: 'fit-content',
    },

    success: {
      bg: 'primary-btn-cl',
      color: 'secondary-cl',
    },

    info: {
      bg: 'secondary-bg',
      color: 'white',
      w: 'fit-content',
    },

    submit: {
      bg: 'primary-btn-cl',
      color: 'secondary-cl',
      borderRadius: 'full',
      w: '100%',
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
