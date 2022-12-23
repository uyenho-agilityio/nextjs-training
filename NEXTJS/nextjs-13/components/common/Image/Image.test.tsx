// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Component
import { Image } from './Image';

// Constant
import { VERCEL_LOGO } from 'constants/index';

describe('Image render', () => {
  test('should render image component with default props', () => {
    const { container } = render(<Image {...VERCEL_LOGO} />);
    expect(container).toMatchSnapshot();
  });

  test('should simulate click event and expect mock function to be called', () => {
    const mockOnClick = jest.fn();
    render(<Image onClick={mockOnClick} {...VERCEL_LOGO} />);

    const button = screen.getByAltText(/logo/i);
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
