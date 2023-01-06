// Lib
import { render } from '@testing-library/react';

// Constant
import { TEXT } from '@webapp/constants';

// Component
import { InputGroup } from './InputGroup';

describe('InputGroup renders', () => {
  test('should render InputGroup component with default props', () => {
    const { container } = render(<InputGroup type="text" text={TEXT.TRY_FOR_FREE} />);
    expect(container).toMatchSnapshot();
  });
});
