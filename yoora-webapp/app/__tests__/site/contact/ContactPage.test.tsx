// Lib
import { render } from '@testing-library/react';

// Component
import ContactPage from '@webapp/app/(site)/contact/ContactPage';

describe('ContactPage renders', () => {
  test('should render ContactPage component', () => {
    const { container } = render(<ContactPage />);

    expect(container).toMatchSnapshot();
  });
});
