// Libs
import { render } from '@testing-library/react';

// Component
import MainNavigation from '.';

describe('MainNavigation renders', () => {
  test('should render MainNavigation component with default props', () => {
    const { container } = render(<MainNavigation size="full" />);
    expect(container).toMatchSnapshot();
  });
});
