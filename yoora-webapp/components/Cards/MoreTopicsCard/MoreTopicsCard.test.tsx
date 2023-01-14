// Lib
import { render } from '@testing-library/react';

// Constant
import { MORE_TOPICS_CONTENT } from '@webapp/constants';

// Component
import { MoreTopicsCard } from '.';

describe('MoreTopicsCard renders', () => {
  test('should render WhatsNewCard component with default props', () => {
    const { container } = render(<MoreTopicsCard {...MORE_TOPICS_CONTENT.CARDS[0]} />);
    expect(container).toMatchSnapshot();
  });
});
