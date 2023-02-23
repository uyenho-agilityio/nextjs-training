// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Component
import { ContactForm } from '@webapp/components';

// Mock
import { TEXT } from '@webapp/mocks';

describe('ContactForm renders', () => {
  test('should render ContactForm component', () => {
    const { container } = render(<ContactForm />);
    expect(container).toMatchSnapshot();
  });

  test('should call handleInputChange when input is changed', () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText(/name/i);
    fireEvent.change(nameInput, { target: { value: TEXT.VALID_NAME } });
    expect((nameInput as HTMLInputElement).value).toBe(TEXT.VALID_NAME);
  });

  test('should call handleInputValidate when input is blurred', () => {
    render(<ContactForm />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.blur(emailInput);
    expect(emailInput).toBeInTheDocument();
  });
});
