// Lib
import { render } from '@testing-library/react';

// Constant
import { HERO_CONTENT } from '@webapp/constants';

// Components
import { InputGroup, Button } from '@webapp/components';

describe('InputGroup renders', () => {
  test('should render InputGroup component with default props', () => {
    const { container } = render(
      <InputGroup
        type="text"
        placeholder={HERO_CONTENT.INPUT}
        rightElement={
          <Button variant="success" pos="absolute" right={{ lg: '3%' }}>
            {HERO_CONTENT.BUTTON}
          </Button>
        }
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
