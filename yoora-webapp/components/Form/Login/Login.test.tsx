// Lib
import { render } from '@testing-library/react';

// Component
import { LoginForm } from '@webapp/components';

describe('LoginForm renders', () => {
  test('should render LoginForm component', () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
});
