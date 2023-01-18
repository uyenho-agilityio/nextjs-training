export const Input = {
  variants: {
    default: {
      field: {
        borderColor: 'third-cl',
        _focus: { borderColor: 'primary-btn-cl' },
        _placeholder: { color: 'border-cl', fontWeight: 'medium' },
        w: { base: 'width.md', lg: 'width.lg' },
        h: { base: 'height.sm', lg: 'height.md' },
        borderRadius: { base: 'base', lg: 'md' },
      },
    },

    'contact-form': {
      field: {
        w: { base: 'width.md', lg: 'width.xl' },
        h: { base: 'height.xs', lg: 'height.md' },
        borderRadius: 'base', //8
        mb: { base: '16px', lg: '24px' },
      },
    },

    'login-form': {
      field: {
        w: 'full',
        h: { base: 'height.xs', lg: 'height.sm' },
        borderRadius: 'sm',
        mb: { base: '20px', lg: '30px' },
        borderColor: 'border-cl',
        borderWidth: '1px',
        _focus: { borderColor: 'primary-btn-cl' },
      },
    },
  },

  defaultProps: {
    variant: 'default',
  },
};
