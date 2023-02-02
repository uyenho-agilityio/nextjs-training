// Lib
import { render } from '@testing-library/react';

// Constant
import { DETAILS_CONTENT } from '@webapp/constants';

// Component
import { BannerCard } from '.';

describe('MoreTopicsCard renders', () => {
  test('should render WhatsNewCard component with default props', () => {
    const { container } = render(<BannerCard {...DETAILS_CONTENT} />);
    expect(container).toMatchSnapshot();
  });
});
