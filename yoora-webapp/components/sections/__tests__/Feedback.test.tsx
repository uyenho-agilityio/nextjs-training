// Lib
import { render, screen } from '@testing-library/react';

// Component
import { FeedbackSection } from '@webapp/components';

// Mock
import { FEEDBACK_DATA } from '@webapp/__mocks__';

describe('FeedbackSection renders', () => {
  test('should render FeedbackSection component with mock data', async () => {
    const { container } = render(<FeedbackSection data={FEEDBACK_DATA} />);

    expect(await screen.findByText(/lola/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should render FeedbackSection component with empty data', () => {
    render(<FeedbackSection data={[]} />);
    expect(screen.queryByText(/lola/i)).toBeFalsy();
  });
});
