import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  registerReservation,
} from './actions';

describe('App', () => {
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
      <App />,
    );

    fireEvent.change(
      getByPlaceholderText('이름'),
      { target: { value: 'Handle Change Restaurant Name' } },
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
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
      <App />,
    );

    fireEvent.change(
      getByPlaceholderText('분류'),
      { target: { value: 'Handle Change Restaurant Category' } },
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
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
      <App />,
    );

    fireEvent.change(
      getByPlaceholderText('주소'),
      { target: { value: 'Handle Change Restaurant Address' } },
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith(
      updateRestaurantAddress('Handle Change Restaurant Address'),
    );
  });

  test('registerReservation', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      id: 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      reservations: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render(
      <App />,
    );

    fireEvent.click(getByText('등록'));

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith(registerReservation());
  });

  test('reservations', () => {
    const restaurant = {
      name: '',
      category: '',
      address: '',
    };
    const reservations = [
      {
        id: 1,
        restaurant: {
          name: '지코바',
          category: '한식',
          address: '서울시 강남구',
        },
      },
      {
        id: 2,
        restaurant: {
          name: '아웃백',
          category: '양식',
          address: '서울시 종로구',
        },
      },
    ];

    useSelector.mockImplementation((selector) => selector({
      restaurant,
      reservations,
    }));

    const { container } = render(
      <App />,
    );

    expect(container).toHaveTextContent('지코바|한식|서울시 강남구');
    expect(container).toHaveTextContent('아웃백|양식|서울시 종로구');
  });
});
