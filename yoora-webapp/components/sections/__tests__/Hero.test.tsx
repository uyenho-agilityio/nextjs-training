// Lib
import { render } from '@testing-library/react';

// Component
import { HeroSection } from '@webapp/components';

describe('HeroSection renders', () => {
  test('should render HeroSection component', () => {
    const { container } = render(<HeroSection />);
    expect(container).toMatchSnapshot();
  });
});
