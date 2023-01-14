'use client';

// Lib
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

// Constant
import { TEXT } from '@webapp/constants';

// Components
import { Input, TextArea, Button } from '@webapp/components';

const ContactForm = (): JSX.Element => {
  return (
    <Flex direction="column" maxW="555px">
      <Input type="text" placeholder="Your Name" />
      <Input type="email" placeholder="Your Email" />
      <TextArea placeholder="Message" />
      <Button variant="success" rightIcon={<ChevronRightIcon />} mt={{ base: 4, lg: 6 }}>
        {TEXT.SEND}
      </Button>
    </Flex>
  );
};

export default ContactForm;
