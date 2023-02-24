// Lib
import { render } from '@testing-library/react';

// Component
import Page from '@webapp/app/(site)/pricing/page';

describe('PricingPage renders', () => {
  test('should render PricingPage component', () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
