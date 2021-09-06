import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantCreateContainer from './RestaurantCreateContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((<RestaurantCreateContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});
