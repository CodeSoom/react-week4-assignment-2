import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const handleClick = jest.fn();
  const buttonRender = () => render((
    <Button onClick={handleClick} />
  ));

  it('버튼 클릭시 호출되는지 확인한다.', () => {
    const { getByText } = buttonRender();
    const button = getByText(/등록/);

    expect(button).not.toBeNull();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
