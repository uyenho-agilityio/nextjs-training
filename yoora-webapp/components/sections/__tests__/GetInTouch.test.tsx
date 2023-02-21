// Lib
import { render } from '@testing-library/react';

// Component
import { GetInTouch } from '@webapp/components';

describe('GetInTouch renders', () => {
  test('should render GetInTouch component', () => {
    const { container } = render(<GetInTouch />);
    expect(container).toMatchSnapshot();
  });
});
