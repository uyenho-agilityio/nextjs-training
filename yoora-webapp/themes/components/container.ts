export const Container = {
  baseStyle: { p: 0, mx: 'auto', my: 0 },

  sizes: {
    default: {
      maxW: {
        sm: '272px',
        md: '614px',
        lg: '1140px',
      },
    },
  },

  variants: {
    default: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },

    center: {
      display: 'flex',
      justifyContent: 'center',
      mt: '100px',
    },
  },

  defaultProps: {
    size: 'default',
  },
};
