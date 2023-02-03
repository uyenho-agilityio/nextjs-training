'use client';

// Lib
import { ChevronRightIcon } from '@chakra-ui/icons';

// Constant
import { TEXT } from '@webapp/constants';

// Hook
import { useMessage } from '@webapp/hooks';

// Components
import { Flex, Input, Textarea, Button } from '@webapp/components';

const ContactForm = (): JSX.Element => {
  const { state, handleChangeInput, handleValidateInput, handleSubmit } = useMessage();
  const { name, email, message, error, loading } = state;

  return (
    <Flex variant="column" alignItems="flex-start">
      <Input
        chakraInputProps={{ variant: 'contact-form' }}
        type="text"
        placeholder="Your Name"
        onChange={e => handleChangeInput(e, 'name')}
        onBlur={e => handleValidateInput(e, 'name')}
        error={error.name}
      />
      <Input
        chakraInputProps={{ variant: 'contact-form' }}
        type="email"
        placeholder="Your Email"
        onChange={e => handleChangeInput(e, 'email')}
        onBlur={e => handleValidateInput(e, 'email')}
        error={error.email}
      />
      <Textarea
        variant="contact-form"
        placeholder="Message"
        onChange={e => handleChangeInput(e, 'message')}
        onBlur={e => handleValidateInput(e, 'message')}
        error={error.message}
      />

      <Button
        variant="success"
        size="md"
        rightIcon={<ChevronRightIcon ml={{ base: '45px', lg: '31px' }} />}
        type="submit"
        onClick={handleSubmit}
        isLoading={loading}
        isDisabled={!name || !email || !message || !!error.name || !!error.email || !!error.message}
      >
        {TEXT.SEND}
      </Button>
    </Flex>
  );
};

export default ContactForm;
