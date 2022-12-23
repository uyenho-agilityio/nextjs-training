// Lib
import { render, screen } from '@testing-library/react';

// Component
import { Title } from './Title';

// Constant
import { TEXT } from 'constants/index';

describe('Title render', () => {
  test('should render title component with default props', () => {
    const { container } = render(<Title>{TEXT.ACADEMY}</Title>);
    expect(container).toMatchSnapshot();
  });

  test('should render title component with valid props', () => {
    render(<Title>{TEXT.ACADEMY}</Title>);
    expect(screen.getByText(/academy/i)).toBeTruthy();
  });
});
