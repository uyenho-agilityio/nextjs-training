// Lib
import { render } from '@testing-library/react';

// Component
import RootLayout from '@webapp/app/(site)/layout';

describe('Layout renders', () => {
  test('should render Layout component', () => {
    const { container } = render(<RootLayout>Content Page</RootLayout>);

    expect(container).toMatchSnapshot();
  });
});
