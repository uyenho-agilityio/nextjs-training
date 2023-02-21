// Lib
import { render } from '@testing-library/react';

// Component
import { MoreTopicsSection } from '@webapp/components';

describe('MoreTopicsSection renders', () => {
  test('should render MoreTopicsSection component', () => {
    const { container } = render(<MoreTopicsSection />);
    expect(container).toMatchSnapshot();
  });
});
