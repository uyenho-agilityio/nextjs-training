// Lib
import { render } from '@testing-library/react';

// Component
import DetailsPage from '@webapp/app/(site)/blog-details/DetailsPage';

describe('DetailsPage renders', () => {
  test('should render DetailsPage component', () => {
    const { container } = render(<DetailsPage />);

    expect(container).toMatchSnapshot();
  });
});
