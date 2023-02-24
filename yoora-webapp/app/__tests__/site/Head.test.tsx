// Lib
import { render } from '@testing-library/react';

// Component
import Head from '@webapp/app/(site)/head';

describe('Head renders', () => {
  test('should render Head component', () => {
    const { container } = render(<Head />);

    expect(container).toMatchSnapshot();
  });
});
