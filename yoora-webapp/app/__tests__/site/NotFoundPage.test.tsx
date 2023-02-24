// Lib
import { render } from '@testing-library/react';

// Component
import NotFound from '@webapp/app/(site)/not-found';

describe('NotFound renders', () => {
  test('should render NotFound component', () => {
    const { container } = render(<NotFound />);

    expect(container).toMatchSnapshot();
  });
});
