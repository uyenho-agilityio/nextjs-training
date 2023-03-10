// Lib
import { render } from '@testing-library/react';

// Constant
import { BENEFIT_CONTENT } from '@webapp/constants';

// Component
import { Card } from '.';

describe('Card renders', () => {
  test('should render card component with default props', () => {
    const { container } = render(
      <Card
        {...BENEFIT_CONTENT.CARDS[0].image}
        {...BENEFIT_CONTENT.CARDS[0]}
        subTitle={BENEFIT_CONTENT.TITLE}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
