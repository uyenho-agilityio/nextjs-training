// Lib
import { render } from '@testing-library/react';

// Component
import { BrandsSection } from '@webapp/components';

describe('BrandsSection renders', () => {
  test('should render BrandsSection component', () => {
    const { container } = render(<BrandsSection />);
    expect(container).toMatchSnapshot();
  });
});
