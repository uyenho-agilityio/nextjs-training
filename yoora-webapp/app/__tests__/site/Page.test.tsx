// Lib
import { render } from '@testing-library/react';

// Component
import Home from '@webapp/app/(site)/page';

describe('Home renders', () => {
  test('should render Home component', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
