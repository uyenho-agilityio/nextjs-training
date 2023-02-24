// Lib
import { render } from '@testing-library/react';

// Component
import Page from '@webapp/app/(site)/product/page';

describe('ProductPage renders', () => {
  test('should render ProductPage component', () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
