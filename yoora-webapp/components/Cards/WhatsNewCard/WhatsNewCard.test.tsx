// Lib
import { render } from '@testing-library/react';

// Constant
import { WHATS_NEW_CONTENT } from '@webapp/constants';

// Component
import { WhatsNewCard } from '.';

describe('WhatsNewCard renders', () => {
  test('should render WhatsNewCard component with default props', () => {
    const { container } = render(<WhatsNewCard {...WHATS_NEW_CONTENT.CARDS[0]} />);
    expect(container).toMatchSnapshot();
  });
});
