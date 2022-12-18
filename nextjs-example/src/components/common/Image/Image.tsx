// Libs
import { Box, BoxProps, chakra } from '@chakra-ui/react';
import NextImage, { ImageProps } from 'next/image';
import React from 'react';

// Utils
import { generateBlurDataUrl } from 'src/utils';

// const loaderImage = (resolverProps: ImageLoaderProps): string => {
//   return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality ?? 80}`;
// };

const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'placeholder', 'blurDataURL'].includes(prop),
});

export const Image: React.FC<ImageProps & BoxProps> = (props): JSX.Element => {
  const { src, alt, width = 1, height = 1, ...rest } = props;

  return (
    <Box pos="relative" cursor="pointer" className="group" {...rest}>
      {+width > 40 && +height > 40 ? (
        <ChakraNextImage
          // loader={loaderImage}
          width={width}
          height={height}
          src={src}
          alt={alt}
          placeholder="blur"
          blurDataURL={generateBlurDataUrl(+`${width}`, +`${height}`)}
        />
      ) : (
        <NextImage width={width} height={height} src={src} alt={alt} />
      )}
    </Box>
  );
};
