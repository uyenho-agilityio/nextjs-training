// Lib
import { render } from '@testing-library/react';

// Component
import { ContactForm } from '@webapp/components';

describe('ContactForm renders', () => {
  test('should render ContactForm component', () => {
    const { container } = render(<ContactForm />);
    expect(container).toMatchSnapshot();
  });
});
