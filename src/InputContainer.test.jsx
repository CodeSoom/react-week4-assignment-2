import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
} from './actions';

describe('InputContainer', () => {
  test('handleChangeRestaurantName', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      reservations: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByPlaceholderText } = render(
      <InputContainer />,
    );

    fireEvent.change(
      getByPlaceholderText('이름'),
      { target: { value: 'Handle Change Restaurant Name' } },
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith(
      updateRestaurantName('Handle Change Restaurant Name'),
    );
  });

  test('handleChangeRestaurantCategory', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      reservations: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByPlaceholderText } = render(
      <InputContainer />,
    );

    fireEvent.change(
      getByPlaceholderText('분류'),
      { target: { value: 'Handle Change Restaurant Category' } },
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith(
      updateRestaurantCategory('Handle Change Restaurant Category'),
    );
  });

  test('handleChangeRestaurantAddress', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      reservations: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByPlaceholderText } = render(
      <InputContainer />,
    );

    fireEvent.change(
      getByPlaceholderText('주소'),
      { target: { value: 'Handle Change Restaurant Address' } },
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith(
      updateRestaurantAddress('Handle Change Restaurant Address'),
    );
  });
});
