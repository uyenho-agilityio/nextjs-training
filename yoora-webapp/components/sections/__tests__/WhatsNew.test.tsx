// Lib
import { render } from '@testing-library/react';

// Component
import { WhatsNewSection } from '@webapp/components';

describe('WhatsNewSection renders', () => {
  test('should render WhatsNewSection component', () => {
    const { container } = render(<WhatsNewSection />);
    expect(container).toMatchSnapshot();
  });
});
