// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Component
import { Button } from './Button';

// Constant
import { TEXT } from 'src/constants';

describe('Button render', () => {
  test('should render button component with default props', () => {
    const { container } = render(<Button text={TEXT.CONTINUE} />);
    expect(container).toMatchSnapshot();
  });

  test('should simulate click event and expect mock function to be called', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} text={TEXT.CONTINUE} />);

    const button = screen.getByText(/continue/i);
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
