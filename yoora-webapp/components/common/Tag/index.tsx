'use client';

// Libs
import { Tag as ChakraTag, TagProps as ChakraTagProps, Box, BoxProps } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

// Component
import { Text } from '@webapp/components';

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

export const Tag: React.FC<TagProps> = ({
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
}): JSX.Element => {
  return (
    <ChakraTag bg="none" px={0} {...chakraTagProps}>
      {!!src && (
        <Image width={width} height={height} alt={alt} src={src} {...imageProps} priority />
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
