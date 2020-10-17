import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  const handleClick = jest.fn();

  const renderButton = (value) => render((
    <Button
      onChange={handleClick}
    >
      {value}
    </Button>
  ));

  const value = '확인';

  it('버튼 확인', () => {
    renderButton(value);

    const { getByRole } = screen;

    expect(getByRole('button', { name: value })).toBeInTheDocument();
  });

  it('onClick 테스트', () => {
    renderButton('');

    const { getByRole } = screen;

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByRole('button', { name: value }));

    expect(handleClick).toBeCalled();
  });
});
