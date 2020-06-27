import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantFormContainer from './RestaurantFormContainer';
import {
  changeRestaurant, saveNewRestaurant,
} from './actions';

jest.mock('react-redux');

describe('RestaurantForm', () => {
  const newRestaurant = {
    name: '맘스터치', category: '패스트푸드', address: '용인수지',
  };

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ newRestaurant }));

  context('when input value is changed', () => {
    it('occurs changeRestarant action', () => {
      const { getByPlaceholderText } = render(
        <RestaurantFormContainer />,
      );

      fireEvent.change(getByPlaceholderText(/이름/), {
        target: { value: '버거킹' },
      });

      expect(dispatch).toBeCalledWith(changeRestaurant('name', '버거킹'));
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
