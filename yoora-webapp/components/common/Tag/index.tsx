'use client';

// Libs
import { Tag as ChakraTag, TagProps as ChakraTagProps, Box, BoxProps } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import dynamic from 'next/dynamic';

// Component
const Text = dynamic(() => import('@webapp/components').then(mod => mod.Text), {
  ssr: false,
});

type TagProps = {
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
  text: string;
  extraText?: string;
  subText?: string;
  chakraTagProps?: ChakraTagProps;
  boxProps?: BoxProps;
  imageProps?: ImageProps;
};

export const Tag = ({
  width,
  height,
  alt = '',
  src = '',
  text,
  extraText,
  subText,
  chakraTagProps,
  boxProps,
  imageProps,
}: TagProps): JSX.Element => {
  return (
    <ChakraTag bg="none" px={0} {...chakraTagProps}>
      {!!src && (
        <Image width={width} height={height} alt={alt} src={src} {...imageProps} loading="eager" />
      )}
      <Box {...boxProps}>
        <Text size="xs" variant="subTitle">
          {text}{' '}
          {extraText && (
            <Text as="span" size="xs" variant="subText">
              {extraText}
            </Text>
          )}
        </Text>

        {subText && (
          <Text size="xs" variant="subText" mt={1}>
            {subText}
          </Text>
        )}
      </Box>
    </ChakraTag>
  );
};
