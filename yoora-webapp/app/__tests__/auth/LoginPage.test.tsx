// Lib
import { render } from '@testing-library/react';

// Component
import LoginPage from '@webapp/app/(auth)/login/page';

describe('LoginPage renders', () => {
  test('should render LoginPage component', () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });
});
