import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InputReservation from '../InputReservation';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('InputReservation', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderInputReservation = () => render((
    <InputReservation
      onChange={handleChange}
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

    expect(handleChange).not.toBeCalled();

    fireEvent.change(input, { target: { value: '마녀주방' } });

    expect(handleChange).toBeCalled();
  });

  it('onChangeCategory 테스트', () => {
    renderInputReservation();

    const input = screen.getByPlaceholderText('분류');

    expect(handleChange).not.toBeCalled();

    fireEvent.change(input, { target: { value: '한식' } });

    expect(handleChange).toBeCalled();
  });

  it('onChangeAddress 테스트', () => {
    renderInputReservation();

    const input = screen.getByPlaceholderText('주소');

    expect(handleChange).not.toBeCalled();

    fireEvent.change(input, { target: { value: '서울시 강남구' } });

    expect(handleChange).toBeCalled();
  });

  it('onClick 테스트', () => {
    renderInputReservation();

    const button = screen.getByRole('button', { name: '등록' });

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
