import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantFormContainer from './RestaurantFormContainer';

import {
  changeRestaurant, saveNewRestaurant,
} from './actions';
import {
  newRestaurant, name,
} from '../fixture/test-data';

jest.mock('react-redux');

describe('RestaurantForm', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ newRestaurant }));

  context('when input value is changed', () => {
    it('occurs changeRestarant action', () => {
      const { getByPlaceholderText } = render(
        <RestaurantFormContainer />,
      );

      fireEvent.change(getByPlaceholderText(/이름/), {
        target: { value: name },
      });

      expect(dispatch).toBeCalledWith(changeRestaurant('name', name));
    });
  });

  context('wheh submit button is clicked', () => {
    it('occurs saveNewRestaurant', () => {
      const { getByText } = render(
        <RestaurantFormContainer />,
      );

      fireEvent.click(getByText(/등록/));

      expect(dispatch).toBeCalledWith(saveNewRestaurant());
    });
  });
});
