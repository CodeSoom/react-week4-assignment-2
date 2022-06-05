import React from 'react';

import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('Button render', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick} />);

    expect(getByText('등록')).toBeInTheDocument();
  });
});
