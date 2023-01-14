// Lib
import { render, screen } from '@testing-library/react';

// Component
import { Text } from '.';

// Constant
import { TEXT } from '@webapp/constants';

describe('Text renders', () => {
  test('should render text component with default props', () => {
    const { container } = render(<Text>{TEXT.LOGIN}</Text>);
    expect(container).toMatchSnapshot();
  });

  test('should render text component with valid props', () => {
    render(<Text>{TEXT.LOGIN}</Text>);
    expect(screen.getByText(/log/i)).toHaveTextContent('Log In');
  });
});
