// Lib
import { render } from '@testing-library/react';

// Component
import { CTASection } from '@webapp/components';

describe('CTASection renders', () => {
  test('should render CTASection component', () => {
    const { container } = render(<CTASection />);
    expect(container).toMatchSnapshot();
  });
});
