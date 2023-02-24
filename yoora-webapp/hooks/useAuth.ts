// Libs
import {
  FocusEvent,
  KeyboardEventHandler,
  MutableRefObject,
  RefObject,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';

// Constants
import { MESSAGE, PAGE_ROUTES } from '@webapp/constants';

// Utils
import { showToast, validateForm } from '@webapp/utils';

// Context
import { AuthContext } from '@webapp/contexts/AuthContext';

export const useAuthContext = () => useContext(AuthContext);

export const useAuth = () => {
  const router = useRouter();
  const { logIn, logOut, user, isAuthenticated } = useAuthContext();

  const emailRef = useRef<{ value: string }>({ value: '' }) as RefObject<HTMLInputElement>;
  const passwordRef = useRef<{ value: string }>({ value: '' }) as RefObject<HTMLInputElement>;

  const [state, setState] = useState({
    error: {
      email: '',
      password: '',
      api: '',
    },
    loading: false,
    apiError: '',
  });

  const handleValidateInput = useCallback(
    (e: FocusEvent<HTMLInputElement>, type: 'email' | 'password'): void => {
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
    const { error } = state;
    const email = (emailRef as MutableRefObject<{ value: string }>).current.value;
    const password = (passwordRef as MutableRefObject<{ value: string }>).current.value;

    if (!!email && !!password) {
      setState({
        ...state,
        loading: true,
      });

      try {
        void logIn(
          {
            email,
            password,
          },

          // Succeed
          () => {
            setState({
              ...state,
              loading: false,
            });

            showToast(MESSAGE.LOGGED_IN);
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

            showToast(error.api || MESSAGE.INVALID_EMAIL_PASSWORD, 'error');
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

        showToast(error.api || MESSAGE.ERROR, 'error');
      }
    }
  };

  const handleSubmitByKeyDown = useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Enter') handleSubmit();
  }, []) as unknown as KeyboardEventHandler<HTMLInputElement>;

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

          showToast(MESSAGE.LOGGED_OUT);
        },

        // Fail
        error => {
          setState({
            ...state,
            loading: false,
            apiError: error,
          });

          showToast(state.apiError || MESSAGE.ERROR, 'error');
        },
      );
    } catch (error) {
      setState({
        ...state,
        loading: false,
        apiError: error as string,
      });

      showToast(state.apiError, 'error');
    }
  };

  return {
    state,
    emailRef,
    passwordRef,
    user,
    isAuthenticated,
    handleValidateInput,
    handleSubmitByKeyDown,
    handleSubmit,
    handleLogOut,
  };
};
