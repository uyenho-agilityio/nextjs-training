// Lib
import { render } from '@testing-library/react';

// Component
import { Spinner } from '.';

describe('Spinner renders', () => {
  test('should render loading component', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
