// Lib
import { render } from '@testing-library/react';

// Component
import { Flex } from '.';

describe('Flex renders', () => {
  test('should render Flex component with default props', () => {
    const { container } = render(
      <Flex>
        <p>This is a Flex component</p>
      </Flex>,
    );
    expect(container).toMatchSnapshot();
  });
});
