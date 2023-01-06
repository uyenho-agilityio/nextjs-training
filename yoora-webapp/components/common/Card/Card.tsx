'use client';

// Lib
import {
  Card as ChakraCard,
  CardProps as ChakraCardProps,
  CardBody,
  Divider,
  Box,
} from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

// Components
import { Title, Text } from '@webapp/components';

type CardProps = {
  chakraCardProps?: ChakraCardProps;
  imageProps?: ImageProps;
  width: number;
  height: number;
  alt: string;
  src: string;
  title: string;
  description: string;
};

export const Card = ({
  chakraCardProps,
  imageProps,
  width,
  height,
  alt = '',
  src,
  title,
  description,
}: CardProps): JSX.Element => {
  return (
    <ChakraCard {...chakraCardProps}>
      <CardBody>
        <Image width={width} height={height} alt={alt} src={src} {...imageProps} />
        <Divider />
        <Box className="content" maxW={width}>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </Box>
      </CardBody>
    </ChakraCard>
  );
};
