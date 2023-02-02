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

    sm: {
      maxW: {
        sm: '272px',
        lg: '400px',
      },
    },

    md: {
      maxW: {
        sm: '272px',
        lg: '750px',
      },
    },
  },

  variants: {
    default: {
      display: 'flex',
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
