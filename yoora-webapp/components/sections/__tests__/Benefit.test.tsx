// Lib
import { render } from '@testing-library/react';

// Component
import { BenefitSection } from '@webapp/components';

describe('BenefitSection renders', () => {
  test('should render BenefitSection component ', () => {
    const { container } = render(<BenefitSection />);
    expect(container).toMatchSnapshot();
  });
});
