// Lib
import { render } from '@testing-library/react';

// Component
import { Loading } from './Loading';

describe('Loading render', () => {
  test('should render loading component', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
