// Libs
import { Box, useStyleConfig, ChakraProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Type
import { Event } from 'src/models';

// Component
import { Image, Text, Title } from 'src/components';

interface CardProps extends Event {
  size?: string;
  variant?: string;
  display?: string;
  children?: ReactNode;
  width: number;
  height: number;
}

export const Card = ({
  title,
  description,
  image,
  size,
  variant,
  display,
  children,
  width,
  height,
  ...props
}: CardProps & ChakraProps): JSX.Element => {
  const cardStyles = useStyleConfig('Card', { size, variant });

  return (
    <Box __css={cardStyles} {...props}>
      <Image className="image" width={width} height={height} alt={title} src={image} />
      <Box className="content" maxW={width}>
        <Title> {title} </Title>
        <Text display={display}>{description}</Text>
      </Box>

      {children}
    </Box>
  );
};
