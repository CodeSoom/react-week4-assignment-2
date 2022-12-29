import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders input boxes', () => {
    const { getAllByRole } = render(<Input />);
    expect(getAllByRole('textbox')).toHaveLength(3);
  });

  it('renders button with text', () => {
    const { getByText } = render(<Input />);
    expect(getByText('등록')).toBeInTheDocument();
  });
});
