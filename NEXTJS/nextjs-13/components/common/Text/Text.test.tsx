// Lib
import { render, screen } from '@testing-library/react';

// Component
import { Text } from './Text';

// Constant
import { TEXT } from 'constants/index';

describe('Text render', () => {
  test('should render text component with default props', () => {
    const { container } = render(<Text>{TEXT.SIGN_IN}</Text>);
    expect(container).toMatchSnapshot();
  });

  test('should render text component with valid props', () => {
    render(<Text>{TEXT.SIGN_IN}</Text>);
    expect(screen.getByText(/sign/i)).toHaveTextContent('Sign in');
  });
});
