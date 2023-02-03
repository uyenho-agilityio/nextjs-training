// Lib
import { Context, createContext, ReactNode, useCallback } from 'react';

// Type
import { Message } from '@webapp/models';

// Service
import { addNewMessage } from '@webapp/services';

type MessageContextValue = {
  createMessage: (
    data: Message,
    onSuccess: () => void,
    onError: (value: string) => void,
  ) => Promise<void>;
};

type MessageProviderProps = {
  children: ReactNode;
};

export const MessageContext: Context<MessageContextValue> = createContext(
  {} as MessageContextValue,
);

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const createMessage = useCallback(
    async (
      message: Message,
      onSuccess: () => void,
      onError: (error: string) => void,
    ): Promise<void> => {
      try {
        const result: Message = await addNewMessage({ message });
        if (result) onSuccess();
        return;
      } catch (error) {
        onError(error as string);
      }
    },
    [],
  );

  return <MessageContext.Provider value={{ createMessage }}>{children}</MessageContext.Provider>;
};
