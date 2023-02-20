// Libs
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// Constant
import { API_PATH } from '@webapp/constants';

// Component
import MainNavigation from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('MainNavigation renders', () => {
  test('should render MainNavigation component with default props', () => {
    const { container } = render(<MainNavigation size="full" />);
    expect(container).toMatchSnapshot();
  });

  test('should show login button after clicking menu button and direct to login page after clicking login button', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    render(<MainNavigation size="full" />);
    const menuButton = screen.getByAltText(/menu/i);

    // Show login button
    fireEvent.click(menuButton);
    const loginButton = screen.getByRole('button', { name: /in/i });
    expect(loginButton).toBeInTheDocument();

    // Direct to login page
    fireEvent.click(loginButton);
    expect(pushMock).toHaveBeenCalledWith(`/${API_PATH.Login}`);
  });
});
