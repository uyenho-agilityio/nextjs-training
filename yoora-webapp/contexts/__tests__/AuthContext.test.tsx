// Lib
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Context
import { AuthProvider } from '../AuthContext';

// Hook
import { useAuthContext } from '@webapp/hooks';

// Mock
import { LOGIN_DATA } from '@webapp/mocks';

describe('AuthContext test', () => {
  const userDataMock = LOGIN_DATA;
  const successFunctionMock = jest.fn();
  const failFunctionMock = jest.fn();

  const AuthComponentMock = () => {
    const { user, isAuthenticated, logIn, logOut } = useAuthContext();

    return (
      <>
        {!isAuthenticated && (
          <button onClick={() => void logIn(userDataMock, successFunctionMock, failFunctionMock)}>
            Login
          </button>
        )}
        {isAuthenticated && <p>{user?.email}</p>}
        {isAuthenticated && (
          <button onClick={() => logOut(successFunctionMock, failFunctionMock)}>Logout</button>
        )}
      </>
    );
  };

  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: userDataMock }),
    }),
  );

  test('should show buttons in 2 cases Login & Logout', async () => {
    render(
      <AuthProvider>
        <AuthComponentMock />
      </AuthProvider>,
    );

    // Show Login, hide Logout when authenticated is false
    const loginBtn = screen.getByRole('button', { name: /in/i });
    expect(loginBtn).toBeInTheDocument();
    expect(screen.queryByText(/out/i)).not.toBeInTheDocument();

    // Expect pressing login btn successfully
    fireEvent.click(loginBtn);
    expect(fetch).toHaveBeenCalled();

    // Hide Login, show Logout when authenticated is true
    await waitFor(() => {
      expect(screen.getByText(/out/i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/in/i)).not.toBeInTheDocument();
    expect(screen.getByText(/user/i)).toBeInTheDocument();

    // Expect pressing logout btn successfully
    fireEvent.click(screen.getByRole('button', { name: /out/i }));

    // Hide Logout, show Login after a successfully logout
    // TODO: can not show Login btn after clicking
    // await waitFor(() => {
    //   expect(loginBtn).toBeInTheDocument();
    // });
    // expect(screen.queryByText(/out/i)).not.toBeInTheDocument();
    // expect(screen.queryByText(/user/i)).not.toBeInTheDocument();
  });
});
