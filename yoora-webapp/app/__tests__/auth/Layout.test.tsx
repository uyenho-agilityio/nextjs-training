// Lib
import { render } from '@testing-library/react';

// Component
import AuthLayout from '@webapp/app/(auth)/layout';

describe('Layout renders', () => {
  test('should render Layout component', () => {
    const { container } = render(<AuthLayout>Content Page</AuthLayout>);

    expect(container).toMatchSnapshot();
  });
});
