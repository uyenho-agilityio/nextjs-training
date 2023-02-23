// Libs
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// Component
import { Header } from '@webapp/components';

// Constants
import { API_PATH, TEXT } from '@webapp/constants';

// Hook
import { useAuth } from '@webapp/hooks';

jest.mock('@webapp/hooks');

describe('Header renders', () => {
  test('should render Header component', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
    });

    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  test('should direct to login page after clicking login button', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
    });
    render(<Header />);

    const loginButton = screen.getByRole('button', { name: /in/i });
    fireEvent.click(loginButton);
    expect(pushMock).toHaveBeenCalledWith(`/${API_PATH.Login}`);
  });

  test('should call handleLogOut when logout button is clicked', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      handleLogOut: jest.fn(),
    });
    render(<Header />);

    fireEvent.click(screen.getByText(TEXT.LOGOUT));
    expect(useAuth().handleLogOut).toHaveBeenCalled();
  });
});
