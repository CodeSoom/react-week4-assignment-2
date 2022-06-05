import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('renders Button', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick} />);
    const element = getByText(/등록/);
    expect(element).toBeInTheDocument();
  });
});
