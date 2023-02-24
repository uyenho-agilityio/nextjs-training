// Lib
import { render } from '@testing-library/react';

// Component
import HomePage from '@webapp/app/(site)/HomePage';

describe('HomePage renders', () => {
  test('should render HomePage component', () => {
    const { container } = render(<HomePage />);

    expect(container).toMatchSnapshot();
  });
});
