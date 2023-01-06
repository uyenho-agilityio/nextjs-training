// Lib
import { render, screen } from '@testing-library/react';

// Component
import { Input } from './Input';

describe('Input renders', () => {
  test('should render input component with default props', () => {
    const { container } = render(<Input type="email" placeholder="Your Email" />);
    expect(container).toMatchSnapshot();
  });

  test('should simulate input event & display new name after typing', () => {
    render(<Input type="text" placeholder="Your Name" />);
    const input = screen.getByPlaceholderText(/name/i);

    input.innerHTML = 'User';
    expect(screen.getByText(/user/i)).toHaveTextContent('User');
  });
});
