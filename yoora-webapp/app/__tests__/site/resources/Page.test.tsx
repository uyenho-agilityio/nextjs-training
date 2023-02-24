// Lib
import { render } from '@testing-library/react';

// Component
import Page from '@webapp/app/(site)/resources/page';

describe('ResourcesPage renders', () => {
  test('should render ResourcesPage component', () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
