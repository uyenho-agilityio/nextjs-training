'use client';

// Lib
import { ChevronRightIcon } from '@chakra-ui/icons';

// Constant
import { TEXT } from '@webapp/constants';

// Components
import { Flex, Input, Textarea, Button } from '@webapp/components';

const ContactForm = (): JSX.Element => {
  return (
    <Flex variant="column" alignItems="flex-start">
      <Input chakraInputProps={{ variant: 'contact-form' }} type="text" placeholder="Your Name" />
      <Input chakraInputProps={{ variant: 'contact-form' }} type="email" placeholder="Your Email" />
      <Textarea variant="contact-form" placeholder="Message" />
      <Button
        variant="success"
        size="lg"
        rightIcon={<ChevronRightIcon ml={{ base: '45px', lg: '31px' }} />}
      >
        {TEXT.SEND}
      </Button>
    </Flex>
  );
};

export default ContactForm;
