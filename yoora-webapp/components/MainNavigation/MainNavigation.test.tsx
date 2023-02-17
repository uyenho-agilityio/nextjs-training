// Libs
import { render } from '@testing-library/react';

// Util
import { mockNextRouter } from '@webapp/utils';

// Component
import MainNavigation from '.';

beforeEach(() => {
  mockNextRouter({ pathname: '/contact', asPath: '/contact' });
});

describe('MainNavigation renders', () => {
  test('should render MainNavigation component with default props', () => {
    const { container } = render(<MainNavigation size="full" />);
    expect(container).toMatchSnapshot();
  });
});
