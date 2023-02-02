export const Textarea = {
  variants: {
    default: {
      borderColor: 'third-cl',
      _focus: { borderColor: 'primary-btn-cl' },
      _placeholder: { color: 'border-cl', fontWeight: 'medium' },
      w: 'width.md',
      h: 'height.lg',
      borderRadius: 'base',
    },

    'contact-form': {
      w: { base: 'width.md', lg: 'width.xl' },
      h: 'height.xl',
      borderRadius: 'base',
      mb: { base: '16px', lg: '24px' },
    },
  },

  defaultProps: {
    variant: 'default',
  },
};
