'use client';

// Libs
import {
  Card as ChakraCard,
  CardProps as ChakraCardProps,
  CardBody,
  CardBodyProps,
  Box,
  BoxProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

// Components
import { Title, Text } from '@webapp/components';

type CardProps = {
  size?: string;
  variant?: string;
  chakraCardProps?: ChakraCardProps;
  cardBodyProps?: CardBodyProps;
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
  text?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
  boxProps?: BoxProps;
};

export const Card = ({
  size,
  variant,
  chakraCardProps,
  cardBodyProps,
  text,
  title,
  subTitle,
  description,
  leftChildren,
  rightChildren,
  boxProps,
}: CardProps): JSX.Element => {
  return (
    <ChakraCard variant="transparent" {...chakraCardProps}>
      <CardBody {...cardBodyProps}>
        {text && <Text>{text}</Text>}
        {leftChildren}

        <Box className="content" {...boxProps}>
          {title && (
            <Title size={size} variant={variant}>
              {title}
            </Title>
          )}
          {subTitle && <Text variant="subTitle">{subTitle}</Text>}
          {description && <Text variant="description">{description}</Text>}
        </Box>

        {rightChildren}
      </CardBody>
    </ChakraCard>
  );
};
