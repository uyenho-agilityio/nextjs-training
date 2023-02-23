// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Mock
import { MESSAGE, TEXT } from '@webapp/mocks';

// Component
import { Input } from '.';

describe('Input renders', () => {
  test('should render input component with default props', () => {
    const { container } = render(<Input type="email" placeholder="Your Email" />);
    expect(container).toMatchSnapshot();
  });

  test('should render input component with error prop', () => {
    render(<Input type="text" defaultValue={TEXT.INVALID_EMAIL} error={MESSAGE.INVALID_EMAIL} />);

    const text = screen.getByText(/invalid/i);
    expect(text).toBeInTheDocument();
  });

  test('should simulate input event & display new name after typing', () => {
    render(<Input type="text" text="Name" placeholder="Your Name" />);
    const input = screen.getByPlaceholderText(/name/i);

    fireEvent.change(input, { target: { value: TEXT.VALID_NAME } });
    expect((input as HTMLInputElement).value).toBe(TEXT.VALID_NAME);
  });
});
