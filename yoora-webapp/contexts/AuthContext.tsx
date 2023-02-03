// Libs
import { Context, createContext, ReactNode, useCallback, useEffect, useState } from 'react';

// Constant
import { STORAGE_KEYS } from '@webapp/constants';

// Types
import { LoginPayload, User } from '@webapp/models';

// Services
import { login, logout } from '@webapp/services';

// Utils
import { clearStorage, getStorage, setStorage } from '@webapp/utils';

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  logIn: (
    data: LoginPayload,
    onSuccess: () => void,
    onError: (value: string) => void,
  ) => Promise<void>;
  logOut: (onSuccess: () => void, onError: (value: string) => void) => void;
};

type MessageProviderProps = {
  children: ReactNode;
};

export const AuthContext: Context<AuthContextValue> = createContext({} as AuthContextValue);

export const AuthProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const currentUser = getStorage(STORAGE_KEYS.CURRENT_USER) as unknown as User;

    if (Object.keys(currentUser).length > 0) {
      setUser(currentUser);
    }
  }, []);

  const logIn = useCallback(
    async (
      payload: LoginPayload,
      onSuccess: () => void,
      onError: (error: string) => void,
    ): Promise<void> => {
      try {
        const result = await login({ payload });

        if (result.data.email) {
          setUser(result.data);
          setStorage<User>(STORAGE_KEYS.CURRENT_USER, result.data);
          onSuccess();
        } else {
          onError(result.message);
        }
      } catch (error) {
        onError(error as string);
      }
    },

    [],
  );

  const logOut = useCallback(
    async (onSuccess: () => void, onError: (error: string) => void): Promise<void> => {
      try {
        const result = await logout();
        setUser(result.data);
        clearStorage(STORAGE_KEYS.CURRENT_USER);
        onSuccess();
      } catch (error) {
        onError(error as string);
      }
    },

    [],
  );

  const value = { user, isAuthenticated, logIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
