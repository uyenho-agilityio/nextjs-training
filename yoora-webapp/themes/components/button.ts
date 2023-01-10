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
      width: '142px',
      height: '56px',
      borderRadius: '8px',
    },

    lg: {
      width: '206px',
      height: '56px',
      borderRadius: '8px',
    },

    xl: {
      width: '198px',
      height: '64px',
      borderRadius: '8px',
    },
  },

  variants: {
    default: {
      bg: 'secondary-cl',
      _hover: { bg: 'none', color: 'primary-btn-cl', borderColor: 'primary-cl', border: '1px' },
    },

    success: {
      bg: 'primary-btn-cl',
      color: 'secondary-cl',
      p: '20px',
    },

    info: {
      bg: 'secondary-bg',
      color: 'white',
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
