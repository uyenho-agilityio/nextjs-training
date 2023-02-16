// Libs
import useSWR from 'swr';
import { Context, createContext, ReactNode, useCallback } from 'react';

// Type
import { Message } from '@webapp/models';

// Service
import { addNewMessage, URL } from '@webapp/services';

type MessageContextValue = {
  createMessage: (
    message: Message,
    onSuccess: () => void,
    onError: (value: string) => void,
  ) => Promise<void>;
  data: Message[] | undefined;
};

type MessageProviderProps = {
  children: ReactNode;
};

export const MessageContext: Context<MessageContextValue> = createContext(
  {} as MessageContextValue,
);

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const { data, mutate } = useSWR<Message[]>(URL);

  const addMessageOptions = (message: Message) => {
    return {
      // optimistic data displays until populating cache
      optimisticData: (data: Message[] | undefined) => [...(data || []), message],
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    };
  };

  const createMessage = useCallback(
    async (
      message: Message,
      onSuccess: () => void,
      onError: (error: string) => void,
    ): Promise<void> => {
      try {
        const newMessage: Message = await addNewMessage({ message });

        await mutate([...(data || []), message], addMessageOptions(newMessage));
        onSuccess();
      } catch (error) {
        onError(error as string);
      }
    },
    [data],
  );

  return (
    <MessageContext.Provider value={{ createMessage, data }}>{children}</MessageContext.Provider>
  );
};
