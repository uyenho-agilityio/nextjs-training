// Lib
import { render, screen } from '@testing-library/react';

// Constant
import { HERO_CONTENT } from '@webapp/constants';

// Mock
import { MESSAGE, TEXT } from '@webapp/mocks';

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

  test('should render InputGroup component with error prop', () => {
    render(
      <InputGroup
        type="password"
        text="Password"
        value={TEXT.INVALID_PWD}
        error={MESSAGE.INVALID_PWD}
      />,
    );

    const text = screen.getByText(/invalid/i);
    expect(text).toBeInTheDocument();
  });
});
