import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantFormContainer from './RestaurantFormContainer';

import {
  addRestaurant,
  updateRestaurant,
} from './actions';

describe('RestaurantFormContainer', () => {
  const renderRestaurantFormContainer = () => render((<RestaurantFormContainer />));

  const dispatch = jest.fn();

  const restaurant = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  const emptyRestaurant = {
    name: '',
    category: '',
    address: '',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({ restaurant }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('updates values upon changing of input values', () => {
    const { getByDisplayValue } = renderRestaurantFormContainer();

    fireEvent.change(getByDisplayValue(/베이징/), {
      target: { value: '송화루' },
    });

    expect(dispatch).toBeCalledWith(updateRestaurant({ name: '송화루' }));
  });

  context('without restaurant', () => {
    it("doesn't append new restaurant upon clicking 등록 button", () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: emptyRestaurant,
      }));

      const { getByText } = renderRestaurantFormContainer();

      fireEvent.click(getByText(/등록/));

      expect(dispatch).not.toBeCalled();
    });
  });

  context('with restaurant', () => {
    it('appends new restaurant upon clicking 등록 button', () => {
      const { getByText } = renderRestaurantFormContainer();

      fireEvent.click(getByText(/등록/));

      expect(dispatch).toBeCalledWith(addRestaurant());
    });
  });
});
