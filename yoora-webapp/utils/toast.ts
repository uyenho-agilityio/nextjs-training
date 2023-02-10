'use client';

// Lib
import { createStandaloneToast } from '@chakra-ui/react';

// Type
import { ToastPosition, ToastStatus } from '@webapp/types';

export const showToast = (
  message: string,
  status: ToastStatus = 'success',
  duration = 2000,
  position: ToastPosition = 'top',
): void => {
  const { toast } = createStandaloneToast();

  toast({
    title: message,
    status,
    duration,
    position,
    isClosable: true,
  });
};
