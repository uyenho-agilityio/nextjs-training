import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import { NextPageWithLayout } from 'src/models';
import { Image, Text, Title } from 'src/components';

const Home: NextPageWithLayout = (): JSX.Element => {
  return <Box textStyle="title">Home Page</Box>;
};

export default Home;
