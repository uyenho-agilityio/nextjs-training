// Lib
import { render } from '@testing-library/react';

// Component
import { RevenueSection } from '@webapp/components';

describe('RevenueSection renders', () => {
  test('should render RevenueSection component', () => {
    const { container } = render(<RevenueSection />);
    expect(container).toMatchSnapshot();
  });
});
