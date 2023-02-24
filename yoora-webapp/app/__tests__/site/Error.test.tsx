// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Constant
import { MESSAGE } from '@webapp/constants';

// Component
import Error from '@webapp/app/(site)/error';

describe('Error renders', () => {
  const error = { name: 'Error', message: MESSAGE.ERROR };
  const reset = jest.fn();

  test('should render error name and message', () => {
    render(<Error error={error} reset={reset} />);

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  test('should call reset function when button is clicked', () => {
    render(<Error error={error} reset={reset} />);

    fireEvent.click(screen.getByText('Reset'));
    expect(reset).toHaveBeenCalled();
  });
});
