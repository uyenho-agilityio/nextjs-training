import { Box } from '@chakra-ui/react';

import { Text } from 'components/common';

const Footer = (): JSX.Element => {
  return (
    <Box as="footer" textAlign="center">
      <Text> © 2022 - An Example Built with Next.js </Text>
    </Box>
  );
};

export default Footer;
