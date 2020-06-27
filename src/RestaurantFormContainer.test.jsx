import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantFormContainer from './RestaurantFormContainer';

jest.mock('react-redux');

test('RestaurantForm', () => {
  const newRestaurant = {
    name: '맘스터치', category: '패스트푸드', address: '용인수지',
  };

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ newRestaurant }));

  const { getByText } = render(
    <RestaurantFormContainer />,
  );

  // TODO: when input value is changed - occurs changeRestaurant
  // TODO: wheh submit button is clicked - occurs saveNewRestaurant

});
