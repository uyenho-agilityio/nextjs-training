'use client';

import { Box, Code, Link } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';
import { Title, Text } from '@webapp/components';

// dynamic import
// const Text = dynamic(() => import('components').then(mod => mod.Text), {
//   loading: () => <Loading />,
// });

const HomePage: NextPage = (): JSX.Element => {
  return (
    <Box as="main" className={styles.main}>
      <Box className={styles.description}>
        <Text>
          Get started by editing&nbsp;
          <Code className={styles.code}>app/page.tsx</Code>
        </Text>
        <Box>
          <Link
            as={NextLink}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </Link>
        </Box>
      </Box>

      <Box className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Box className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </Box>
      </Box>

      <Box className={styles.grid}>
        <Link
          as={NextLink}
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title fontFamily="subBody">
            Docs <span>-&gt;</span>
          </Title>
          <Text>Find in-depth information about Next.js features and API.</Text>
        </Link>

        <Link
          as={NextLink}
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title fontFamily="subBody">
            Templates <span>-&gt;</span>
          </Title>
          <Text>Explore the Next.js 13 playground.</Text>
        </Link>

        <Link
          as={NextLink}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title fontFamily="subBody">
            Deploy <span>-&gt;</span>
          </Title>
          <Text>Instantly deploy your Next.js site to a shareable URL with Vercel.</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
