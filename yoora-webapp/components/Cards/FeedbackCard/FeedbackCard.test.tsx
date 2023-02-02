// Lib
import { render } from '@testing-library/react';

// Constant
import { FEEDBACK_CONTENT } from '@webapp/constants';

// Component
import { FeedbackCard } from '.';

describe('WhatsNewCard renders', () => {
  test('should render WhatsNewCard component with default props', () => {
    const { container } = render(<FeedbackCard {...FEEDBACK_CONTENT.CARDS[0]} />);
    expect(container).toMatchSnapshot();
  });
});
