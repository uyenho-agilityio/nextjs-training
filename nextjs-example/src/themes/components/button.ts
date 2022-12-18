export const Button = {
  baseStyle: {
    borderRadius: 'full',
  },

  sizes: {
    default: {
      width: '106px',
      height: '38px',
    },
  },

  variants: {
    default: {
      bg: 'primary-cl',
      color: 'white',
      _hover: { bg: 'none', color: 'primary-cl', borderColor: 'primary-cl', border: '1px' },
    },

    ghost: {
      bg: 'white',
      color: 'primary-cl',
      ml: '40px',
      mt: '30px',
      _hover: { bg: 'none' },
    },

    long: {
      bg: 'primary-cl',
      color: 'white',
      w: '100%',
      mt: '10px',
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
