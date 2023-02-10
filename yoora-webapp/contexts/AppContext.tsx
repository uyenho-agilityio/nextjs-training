// Lib
import React, { ReactNode } from 'react';

// Providers
import { AuthProvider } from './AuthContext';
import { MessageProvider } from './MessageContext';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <MessageProvider>{children}</MessageProvider>
    </AuthProvider>
  );
};
