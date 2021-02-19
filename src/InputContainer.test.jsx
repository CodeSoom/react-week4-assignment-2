import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';
import InputContainer from './InputContainer';
import { ADD_RESTAURANT } from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('should render three inputs and one button', () => {
    const { getByPlaceholderText, getByRole } = render(<InputContainer />);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('restaurantInfo should be able to be entered.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);
    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(getByPlaceholderText('이름'), { target: { name: 'name', value: '선정릉역 깐부치킨' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_RESTAURANTINFO', payload: { name: '선정릉역 깐부치킨' } });

    fireEvent.change(getByPlaceholderText('분류'), { target: { name: 'category', value: '한식' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_RESTAURANTINFO', payload: { category: '한식' } });

    fireEvent.change(getByPlaceholderText('주소'), { target: { name: 'address', value: '서울 강남구 삼성동 37 깐부치킨 선정릉역점' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_RESTAURANTINFO', payload: { address: '서울 강남구 삼성동 37 깐부치킨 선정릉역점' } });
  });

  it('should be able to add a restaurant list', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);
    const { getByRole } = render(<InputContainer />);

    fireEvent.click(getByRole('button'));
    expect(dispatch).toHaveBeenCalledWith({ type: ADD_RESTAURANT });
  });
});
