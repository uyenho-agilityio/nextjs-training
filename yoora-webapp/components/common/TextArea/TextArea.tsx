// Lib
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';

type TextareaProps = {
  error?: string;
} & ChakraTextareaProps;

export const TextArea: React.FC<TextareaProps> = ({ error, ...props }: TextareaProps) => {
  return error ? (
    <FormControl isInvalid={!!error}>
      <ChakraTextarea {...props} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  ) : (
    <ChakraTextarea {...props} />
  );
};
