// Lib
import { render } from '@testing-library/react';

// Component
import Page from '@webapp/app/(site)/company/page';

describe('CompanyPage renders', () => {
  test('should render CompanyPage component', () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
