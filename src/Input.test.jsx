import { render } from '@testing-library/react';
import Input from './Input';

const renderInput = () => render((
  <Input />
));

describe('Input', () => {
  it('renders 3 inputs', () => {
    const { queryAllByRole } = renderInput();

    expect(queryAllByRole('textbox')).toHaveLength(3);
  });

  it('renders button', () => {
    const { queryByRole } = renderInput();

    expect(queryByRole('button')).not.toBeNull();
  });
});
