// Lib
import { render } from '@testing-library/react';

// Component
import { Footer } from '@webapp/components';

describe('Footer renders', () => {
  test('should render Footer component', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
