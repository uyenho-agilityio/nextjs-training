// Lib
import { render } from '@testing-library/react';

// Component
import { TextArea } from '.';

// Constant
import { MESSAGE } from '@webapp/constants';

describe('TextArea renders', () => {
  test('should render TextArea component with default props', () => {
    const { container } = render(<TextArea>{MESSAGE.SEND_MESSAGE}</TextArea>);
    expect(container).toMatchSnapshot();
  });
});
