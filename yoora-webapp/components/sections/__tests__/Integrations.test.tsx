// Lib
import { render } from '@testing-library/react';

// Component
import { IntegrationsSection } from '@webapp/components';

describe('IntegrationsSection renders', () => {
  test('should render IntegrationsSection component', () => {
    const { container } = render(<IntegrationsSection />);
    expect(container).toMatchSnapshot();
  });
});
