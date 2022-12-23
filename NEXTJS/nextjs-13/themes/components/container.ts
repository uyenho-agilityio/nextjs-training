export const Container = {
  baseStyle: { p: 0, mx: 'auto', my: 0 },

  sizes: {
    default: {
      minW: {
        sm: '390px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        xxxl: '1632px',
      },
    },

    sm: {
      maxW: {
        sm: '320px',
        md: '400px',
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
