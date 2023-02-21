// Libs
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// Component
import { Header } from '@webapp/components';

// Constant
import { API_PATH } from '@webapp/constants';

describe('Header renders', () => {
  test('should render Header component', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  test('should direct to login page after clicking login button', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    render(<Header />);

    const loginButton = screen.getByRole('button', { name: /in/i });
    fireEvent.click(loginButton);
    expect(pushMock).toHaveBeenCalledWith(`/${API_PATH.Login}`);
  });
});
