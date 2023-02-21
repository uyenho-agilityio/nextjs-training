// Lib
import { render } from '@testing-library/react';

// Component
import { FeaturesSection } from '@webapp/components';

describe('FeaturesSection renders', () => {
  test('should render FeaturesSection component', () => {
    const { container } = render(<FeaturesSection />);
    expect(container).toMatchSnapshot();
  });
});
