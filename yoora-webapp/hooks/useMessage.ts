// Libs
import { ChangeEvent, FocusEvent, useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

// Constants
import { MESSAGE, PAGE_ROUTES } from '@webapp/constants';

// Type
import { ToastStatus } from '@webapp/types';

// Utils
import { showToast, validateForm } from '@webapp/utils';

// Hook
import { useAuth } from '@webapp/hooks';

// Context
import { MessageContext } from '@webapp/contexts/MessageContext';

const useMessageContext = () => useContext(MessageContext);

export const useMessage = () => {
  const router = useRouter();
  const { createMessage, data } = useMessageContext();
  const { user } = useAuth();

  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    error: {
      name: '',
      email: '',
      message: '',
      api: '',
    },
    loading: false,
  });

  const handleChangeInput = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      type: 'name' | 'email' | 'message',
    ) => {
      setState({
        ...state,
        [type]: e.target.value,
        error: {
          ...state.error,
          [type]: '',
        },
      });
    },

    [state],
  );

  const handleValidateInput = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, type: 'name' | 'email' | 'message') => {
      const value = e.target.value;

      setState({
        ...state,
        error: {
          ...state.error,
          [type]: validateForm(value, type),
        },
      });
    },

    [state],
  );

  const handleSubmit = (): void => {
    const { name, email, message, error } = state;

    setState({
      ...state,
      loading: true,
    });

    if (user) {
      try {
        const newMessage = {
          id: null,
          name: name,
          email: email,
          message: message,
          avatar: user.avatar,
        };

        void createMessage(
          newMessage,

          // Succeed
          () => {
            setState({
              ...state,
              loading: false,
            });

            showToast(MESSAGE.SUCCESS, ToastStatus.Success);
            router.push(PAGE_ROUTES.HOME);
          },

          // Fail
          err => {
            setState({
              ...state,
              loading: false,
              error: {
                ...error,
                api: err,
              },
            });

            showToast(MESSAGE.FAILURE, ToastStatus.Error);
          },
        );
      } catch (err) {
        setState({
          ...state,
          loading: false,
          error: {
            ...error,
            api: err as string,
          },
        });

        showToast(error.api, ToastStatus.Error);
      }
    }
  };

  return { data, state, handleChangeInput, handleValidateInput, handleSubmit };
};
