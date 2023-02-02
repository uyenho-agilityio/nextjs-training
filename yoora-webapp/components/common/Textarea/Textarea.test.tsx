// Lib
import { render, screen } from '@testing-library/react';

// Component
import { Textarea } from '.';

// Constant
import { MESSAGE } from '@webapp/constants';

describe('Textarea renders', () => {
  test('should render Textarea component with default props', () => {
    const { container } = render(<Textarea placeholder="Message" />);
    expect(container).toMatchSnapshot();
  });

  test('should simulate textarea event & display new message after typing', () => {
    render(<Textarea placeholder="Message" />);
    const textarea = screen.getByPlaceholderText(/message/i);

    textarea.innerHTML = `${MESSAGE.SEND_MESSAGE}`;
    expect(screen.getByText(/lorem/i)).toBeTruthy();
  });
});
