export const Flex = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
  },

  variants: {
    column: {
      flexDirection: 'column',
    },

    responsive: {
      flexDirection: { base: 'column', lg: 'row' },
    },

    'responsive-between': {
      flexDirection: { base: 'column', lg: 'row' },
      justifyContent: 'space-between',
    },

    'responsive-reverse': {
      flexDirection: { base: 'column-reverse', lg: 'row' },
      justifyContent: 'space-between',
    },

    'responsive-start': {
      flexDirection: { base: 'column', lg: 'row' },
      justifyContent: { base: 'flex-start', lg: 'space-between' },
      alignItems: { base: 'flex-start', lg: 'center' },
    },

    'responsive-center': {
      flexDirection: { base: 'column', lg: 'row' },
      justifyContent: 'space-between',
      alignItems: { base: 'center', lg: 'flex-end' },
    },

    pointer: {
      cursor: 'pointer',
      gap: '6px',
      justifyContent: 'center',
    },
  },
};
