import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantCreateContainer from '../src/RestaurantCreateContainer';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
  }));

  const { getByText } = render((
    <RestaurantCreateContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});
