import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('should render three inputs and one button', () => {
    const { getByPlaceholderText, getByText } = render(<InputContainer />);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByText('등록')).toBeInTheDocument();
  });

  it('restaurantInfo should be able to be entered.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);
    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '선정릉역 깐부치킨' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_RESTAURANTINFO', payload: '선정릉역 깐부치킨' });

    fireEvent.change(getByPlaceholderText('분류'), { target: { value: '한식' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_RESTAURANTINFO', payload: '한식' });

    fireEvent.change(getByPlaceholderText('주소'), { target: { value: '서울 강남구 삼성동 37 깐부치킨 선정릉역점' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_RESTAURANTINFO', payload: '서울 강남구 삼성동 37 깐부치킨 선정릉역점' });
  });
});
