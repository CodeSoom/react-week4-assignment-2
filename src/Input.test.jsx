import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('it renders "Input" text', () => {
    const { getByText } = render(<Input />);

    expect(getByText('Input')).not.toBeNull();
  });
});
