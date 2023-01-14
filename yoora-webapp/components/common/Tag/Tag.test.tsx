// Lib
import { render } from '@testing-library/react';

// Constant
import { REVENUE_CONTENT } from '@webapp/constants';

// Component
import { Tag } from '.';

describe('Tag renders', () => {
  test('should render tag component with default props', () => {
    const { container } = render(
      <Tag
        {...REVENUE_CONTENT.ITEMS[0].image}
        text={REVENUE_CONTENT.ITEMS[0].name}
        subText={REVENUE_CONTENT.ITEMS[0].position}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
