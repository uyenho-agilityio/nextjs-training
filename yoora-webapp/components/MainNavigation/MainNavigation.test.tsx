// Libs
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// Component
import MainNavigation from '.';

// Constants
import { API_PATH, TEXT } from '@webapp/constants';

// Hook
import { useAuth } from '@webapp/hooks';

jest.mock('@webapp/hooks');

describe('MainNavigation renders', () => {
  test('should render MainNavigation component with default props', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
    });

    const { container } = render(<MainNavigation size="full" />);
    expect(container).toMatchSnapshot();
  });

  test('should show login button after clicking menu button and direct to login page after clicking login button', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
    });
    render(<MainNavigation size="full" />);
    const menuButton = screen.getByAltText(/menu/i);

    // Show login button
    fireEvent.click(menuButton);
    const loginButton = screen.getByText(TEXT.LOGIN);
    expect(loginButton).toBeInTheDocument();

    // Direct to login page
    fireEvent.click(loginButton);
    expect(pushMock).toHaveBeenCalledWith(`/${API_PATH.Login}`);
  });

  test('should call handleLogOut when logout button is clicked', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      handleLogOut: jest.fn(),
    });
    render(<MainNavigation />);
    const menuButton = screen.getByAltText(/menu/i);

    // Show logout button
    fireEvent.click(menuButton);
    const logoutButton = screen.getByText(TEXT.LOGOUT);
    expect(logoutButton).toBeInTheDocument();

    // Expect to click logout btn successfully
    fireEvent.click(logoutButton);
    expect(useAuth().handleLogOut).toHaveBeenCalled();
  });
});
