import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantCreateContainer from './RestaurantCreateContainer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

jest.mock('react-redux');

describe('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
  });

  const initialRestaurants = [];
  const initialRestaurant = {
    name: '',
    category: '',
    address: '',
  };

  describe('input restaurant information', () => {
    it('changes a name of restaurant', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: initialRestaurant,
      }));

      const { getByPlaceholderText } = render(<RestaurantCreateContainer />);

      fireEvent.change(getByPlaceholderText('이름'), { target: { value: '마녀주방' } });

      expect(dispatch).toBeCalledWith(updateRestaurantName('마녀주방'));
    });

    it('changes a category of restaurant', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: initialRestaurant,
      }));

      const { getByPlaceholderText } = render(<RestaurantCreateContainer />);

      fireEvent.change(getByPlaceholderText('분류'), { target: { value: '양식' } });

      expect(dispatch).toBeCalledWith(updateRestaurantCategory('양식'));
    });

    it('changes a address of restaurant', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: initialRestaurant,
      }));

      const { getByPlaceholderText } = render(<RestaurantCreateContainer />);

      fireEvent.change(getByPlaceholderText('주소'), { target: { value: '강남구 서현동' } });

      expect(dispatch).toBeCalledWith(updateRestaurantAddress('강남구 서현동'));
    });
  });

  it('click add button', () => {
    useSelector.mockImplementation((selector) => selector({
      initialRestaurants,
    }));

    const { getByText } = render(<RestaurantCreateContainer />);

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith(addRestaurant());
  });
});
