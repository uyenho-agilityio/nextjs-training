// Lib
import { render } from '@testing-library/react';

// Component
import { BannerSection } from '@webapp/components';

describe('BannerSection renders', () => {
  test('should render BannerSection component', () => {
    const { container } = render(<BannerSection />);
    expect(container).toMatchSnapshot();
  });
});
