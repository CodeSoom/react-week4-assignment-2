import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantListContainer from './RestaurantListContainer';

import restaurantList from '../fixtures/restaurantList';

test('RestaurantListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantList,
  }));

  const { getByText } = render((
    <RestaurantListContainer />
  ));

  expect(getByText(/호식당/)).not.toBeNull();
});
