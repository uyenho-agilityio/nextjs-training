// Libs
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Constant
import { LANGUAGE_OPTIONS } from '@webapp/constants';

// Component
import { Select } from './Select';

describe('Select renders', () => {
  test('should render select component with default props', () => {
    const { container } = render(<Select options={LANGUAGE_OPTIONS} />);
    expect(container).toMatchSnapshot();
  });

  test('should simulate select event & display vietnamese language after selecting', async () => {
    render(<Select options={LANGUAGE_OPTIONS} />);

    const select = screen.getByRole('combobox');
    expect(await screen.findByRole('option', { name: 'English' })).toBeInTheDocument();

    act(() => {
      userEvent.selectOptions(select, 'vietnamese');
    });

    await waitFor(() => {
      expect(select).toHaveValue('vietnamese');
    });
  });
});
