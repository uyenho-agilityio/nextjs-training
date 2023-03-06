// Lib
import { render } from '@testing-library/react';

// Constant
import { FEEDBACK_CONTENT } from '@webapp/constants';

// Component
import { FeedbackCard } from '.';

describe('FeedbackCard renders', () => {
  test('should render FeedbackCard component with default props', () => {
    const { container } = render(<FeedbackCard feedback={FEEDBACK_CONTENT.CARDS[0]} />);
    expect(container).toMatchSnapshot();
  });
});
