// Lib
import { render } from '@testing-library/react';

// Component
import { CustomWrapItem } from '.';

describe('CustomWrapItem renders', () => {
  test('should render CustomWrapItem component with default props', () => {
    const { container } = render(
      <CustomWrapItem>
        <p>This is a CustomWrapItem component</p>
      </CustomWrapItem>,
    );
    expect(container).toMatchSnapshot();
  });
});
