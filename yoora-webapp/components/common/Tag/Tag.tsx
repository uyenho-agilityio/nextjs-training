// Libs
import {
  Tag as ChakraTag,
  TagProps as ChakraTagProps,
  Box,
  BoxProps,
  Flex,
} from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

// Component
import { Text, Title } from '@webapp/components';

type TagProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'solid' | 'outline';
  colorScheme?: string;
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
  text: string;
  subText?: string;
  chakraTagProps?: ChakraTagProps;
  boxProps?: BoxProps;
  imageProps?: ImageProps;
};

export const Tag: React.FC<TagProps> = ({
  size,
  variant,
  colorScheme = 'third-bg',
  width,
  height,
  alt = '',
  src = '',
  text,
  subText,
  chakraTagProps,
  boxProps,
  imageProps,
}): JSX.Element => {
  return (
    <ChakraTag size={size} variant={variant} colorScheme={colorScheme} {...chakraTagProps}>
      <Flex>
        <Image width={width} height={height} alt={alt} src={src} {...imageProps} />
        <Box {...boxProps}>
          <Title size="md">{text}</Title>
          {subText && <Text>{subText}</Text>}
        </Box>
      </Flex>
    </ChakraTag>
  );
};
