// Libs
import { ChangeEvent, FocusEvent, useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

// Constants
import { MESSAGE, PAGE_ROUTES } from '@webapp/constants';

// Type
import { ToastStatus } from '@webapp/types';

// Utils
import { showToast, validateForm } from '@webapp/utils';

// Context
import { AuthContext } from '@webapp/contexts/AuthContext';

const useAuthContext = () => useContext(AuthContext);

export const useAuth = () => {
  const router = useRouter();
  const { logIn, logOut, user, isAuthenticated } = useAuthContext();

  const [state, setState] = useState({
    email: '',
    password: '',
    error: {
      email: '',
      password: '',
      api: '',
    },
    loading: false,
    apiError: '',
  });

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: 'email' | 'password') => {
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
    (e: FocusEvent<HTMLInputElement>, type: 'email' | 'password') => {
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
    const { email, password, error } = state;

    setState({
      ...state,
      loading: true,
    });

    try {
      void logIn(
        {
          email: email,
          password: password,
        },

        // Succeed
        () => {
          setState({
            ...state,
            loading: false,
          });

          showToast(MESSAGE.LOGGED_IN, ToastStatus.Success);
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

          showToast(error.api || MESSAGE.INVALID_EMAIL_PASSWORD, ToastStatus.Error);
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

      showToast(error.api || MESSAGE.ERROR, ToastStatus.Error);
    }
  };

  const handleLogOut = (): void => {
    setState({
      ...state,
      loading: true,
    });

    try {
      logOut(
        // Succeed
        () => {
          setState({
            ...state,
            loading: false,
          });

          showToast(MESSAGE.LOGGED_OUT, ToastStatus.Success);
          router.refresh();
        },

        // Fail
        error => {
          setState({
            ...state,
            loading: false,
            apiError: error,
          });

          showToast(state.apiError || MESSAGE.ERROR, ToastStatus.Error);
        },
      );
    } catch (error) {
      setState({
        ...state,
        loading: false,
        apiError: error as string,
      });

      showToast(state.apiError, ToastStatus.Error);
    }
  };

  return {
    state,
    user,
    isAuthenticated,
    handleChangeInput,
    handleValidateInput,
    handleSubmit,
    handleLogOut,
  };
};
