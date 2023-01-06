// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Component
import { Button } from './Button';

// Constant
import { TEXT } from '@webapp/constants';

describe('Button renders', () => {
  test('should render button component with default props', () => {
    const { container } = render(<Button>{TEXT.TRY_FOR_FREE}</Button>);
    expect(container).toMatchSnapshot();
  });

  test('should simulate click event and expect mock function to be called', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>{TEXT.TRY_FOR_FREE}</Button>);

    const button = screen.getByText(/try/i);
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
