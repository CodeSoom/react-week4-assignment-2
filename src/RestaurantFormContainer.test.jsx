import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantFormContainer from './RestaurantFormContainer';

import {
  changeName, changeType, changeAddress, addRestaurant,
} from './action';

jest.mock('react-redux');

describe('<RestaurantFormContainer />', () => {
  context('when the user input a new restaurant', () => {
    it('shows a new restaurant name in input', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {},
      }));

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getByPlaceholderText } = render(
        <RestaurantFormContainer />,
      );

      fireEvent.change(getByPlaceholderText(/이름/i), {
        target: {
          value: '이름1',
        },
      });

      expect(getByPlaceholderText(/이름/i).value).toBe('이름1');

      expect(dispatch).toHaveBeenCalledWith(changeName('이름1'));

      expect(dispatch).toHaveBeenCalledTimes(1);
    });

    it('shows a new restaurant type in inputs', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {},
      }));

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getByPlaceholderText } = render(
        <RestaurantFormContainer />,
      );

      fireEvent.change(getByPlaceholderText(/분류/i), {
        target: {
          value: '분류1',
        },
      });

      expect(getByPlaceholderText(/분류/i).value).toBe('분류1');

      expect(dispatch).toHaveBeenCalledWith(changeType('분류1'));

      expect(dispatch).toHaveBeenCalledTimes(1);
    });

    it('shows a new restaurant address in inputs', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
        restaurant: {},
      }));

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getByPlaceholderText } = render(
        <RestaurantFormContainer />,
      );

      fireEvent.change(getByPlaceholderText(/주소/i), {
        target: {
          value: '주소1',
        },
      });

      expect(getByPlaceholderText(/주소/i).value).toBe('주소1');

      expect(dispatch).toHaveBeenCalledWith(changeAddress('주소1'));

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });

  context('when the user add a new restaurant', () => {
    it('input is empty', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          name: '레스토랑',
          type: '분류4',
          address: '주소4',
        },
      }));

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getByText } = render(
        <RestaurantFormContainer />,
      );

      fireEvent.click(getByText(/등록/i));

      expect(dispatch).toHaveBeenCalledWith(addRestaurant());

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
