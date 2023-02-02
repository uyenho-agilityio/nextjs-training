// Lib
import { render } from '@testing-library/react';

// Constant
import { BENEFIT_CONTENT } from '@webapp/constants';

// Component
import { BenefitCard } from '.';

describe('BenefitCard renders', () => {
  test('should render BenefitCard component with default props', () => {
    const { container } = render(<BenefitCard {...BENEFIT_CONTENT.CARDS[0]} />);
    expect(container).toMatchSnapshot();
  });
});
