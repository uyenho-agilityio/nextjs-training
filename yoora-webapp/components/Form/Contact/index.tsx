'use client';

// Lib
import { ChevronRightIcon } from '@chakra-ui/icons';

// Constant
import { TEXT } from '@webapp/constants';

// Hook
import { useMessage } from '@webapp/hooks';

// Components
import { Flex, Input, Textarea, Button } from '@webapp/components';
import { ChangeEvent, FocusEvent } from 'react';

const ContactForm = (): JSX.Element => {
  const { state, handleChangeInput, handleValidateInput, handleSubmit } = useMessage();
  const { name, email, message, error, loading } = state;

  type InputType = 'name' | 'email' | 'message';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    handleChangeInput(e, name as InputType);
  };

  const handleInputValidate = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    handleValidateInput(e, name as InputType);
  };

  return (
    <Flex variant="column" alignItems="flex-start">
      <Input
        variant="contact-form"
        name="name"
        type="text"
        placeholder="Your Name"
        onChange={handleInputChange}
        onBlur={handleInputValidate}
        error={error.name}
        formErrorMessageProps={{ mt: '-4', mb: '5' }}
      />
      <Input
        variant="contact-form"
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={handleInputChange}
        onBlur={handleInputValidate}
        error={error.email}
        formErrorMessageProps={{ mt: '-4', mb: '5' }}
      />
      <Textarea
        variant="contact-form"
        name="message"
        placeholder="Message"
        onChange={handleInputChange}
        onBlur={handleInputValidate}
        error={error.message}
        formErrorMessageProps={{ mt: '-4', mb: '5' }}
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
