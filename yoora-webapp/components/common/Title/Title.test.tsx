// Lib
import { render, screen } from '@testing-library/react';

// Component
import { Title } from '.';

// Constant
import { TEXT } from '@webapp/constants';

describe('Title renders', () => {
  test('should render title component with default props', () => {
    const { container } = render(<Title>{TEXT.HEAD_BACK}</Title>);
    expect(container).toMatchSnapshot();
  });

  test('should render title component with valid props', () => {
    render(<Title>{TEXT.HEAD_BACK}</Title>);
    expect(screen.getByText(/head back/i)).toBeTruthy();
  });
});
