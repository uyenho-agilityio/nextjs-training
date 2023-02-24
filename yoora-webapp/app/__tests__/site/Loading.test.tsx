// Lib
import { render } from '@testing-library/react';

// Component
import Loading from '@webapp/app/(site)/loading';

describe('Loading renders', () => {
  test('should render Loading component', () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
