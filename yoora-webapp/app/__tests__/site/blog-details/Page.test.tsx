// Lib
import { render } from '@testing-library/react';

// Component
import Details from '@webapp/app/(site)/blog-details/page';

describe('Details renders', () => {
  test('should render Details component', () => {
    const { container } = render(<Details />);

    expect(container).toMatchSnapshot();
  });
});
