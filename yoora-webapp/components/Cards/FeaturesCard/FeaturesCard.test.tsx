// Lib
import { render } from '@testing-library/react';

// Constant
import { FEATURES_CONTENT } from '@webapp/constants';

// Component
import { FeaturesCard } from '.';

describe('FeaturesCard renders', () => {
  test('should render FeaturesCard component with default props', () => {
    const { container } = render(<FeaturesCard {...FEATURES_CONTENT[0]} />);
    expect(container).toMatchSnapshot();
  });
});
