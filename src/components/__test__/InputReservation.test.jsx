import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InputReservation from '../InputReservation';

describe('InputReservation', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClick = jest.fn();

  const renderInputReservation = () => render((
    <InputReservation
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleClick}
    />
  ));

  it('input과 button 확인', () => {
    renderInputReservation();

    const { getByPlaceholderText, getByRole } = screen;

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  it('onChangeName 테스트', () => {
    renderInputReservation();

    const input = screen.getByPlaceholderText('이름');

    expect(handleChangeName).not.toBeCalled();

    fireEvent.change(input, { target: { value: '마녀주방' } });

    expect(handleChangeName).toBeCalled();
  });

  it('onChangeCategory 테스트', () => {
    renderInputReservation();

    const input = screen.getByPlaceholderText('분류');

    expect(handleChangeCategory).not.toBeCalled();

    fireEvent.change(input, { target: { value: '한식' } });

    expect(handleChangeCategory).toBeCalled();
  });

  it('onChangeAddress 테스트', () => {
    renderInputReservation();

    const input = screen.getByPlaceholderText('주소');

    expect(handleChangeAddress).not.toBeCalled();

    fireEvent.change(input, { target: { value: '서울시 강남구' } });

    expect(handleChangeAddress).toBeCalled();
  });

  it('onClick 테스트', () => {
    renderInputReservation();

    const button = screen.getByRole('button', { name: '등록' });

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
