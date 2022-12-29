import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders input boxes', () => {
    const { getAllByRole } = render(<Input />);
    expect(getAllByRole('textbox')).toBeInTheDocument();
  });
});
