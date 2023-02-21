// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Component
import { Textarea } from '.';

// Constant
import { MESSAGE } from '@webapp/constants';

describe('Textarea renders', () => {
  test('should render Textarea component with default props', () => {
    const { container } = render(<Textarea placeholder="Message" />);
    expect(container).toMatchSnapshot();
  });

  test('should render Textarea component with error prop', () => {
    render(<Textarea value={MESSAGE.SEND_MESSAGE} error={MESSAGE.ERROR} />);

    const text = screen.getByText(/wrong/i);
    expect(text).toBeInTheDocument();
  });

  test('should simulate textarea event & display new message after typing', () => {
    render(<Textarea placeholder="Message" />);
    const textarea = screen.getByPlaceholderText(/message/i);

    fireEvent.change(textarea, { target: { value: MESSAGE.SEND_MESSAGE } });
    expect((textarea as HTMLTextAreaElement).value).toBe(MESSAGE.SEND_MESSAGE);
  });
});
