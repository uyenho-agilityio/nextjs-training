// Lib
import { render } from '@testing-library/react';

// Component
import { DetailsSection } from '@webapp/components';

describe('DetailsSection renders', () => {
  test('should render DetailsSection component', () => {
    const { container } = render(<DetailsSection />);
    expect(container).toMatchSnapshot();
  });
});
