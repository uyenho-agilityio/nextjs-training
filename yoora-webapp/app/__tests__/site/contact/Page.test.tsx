// Lib
import { render } from '@testing-library/react';

// Component
import Contact from '@webapp/app/(site)/contact/page';

describe('Contact renders', () => {
  test('should render Contact component', () => {
    const { container } = render(<Contact />);

    expect(container).toMatchSnapshot();
  });
});
