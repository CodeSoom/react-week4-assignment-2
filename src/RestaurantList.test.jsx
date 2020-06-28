import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

import restaurantList from '../fixtures/restaurantList';

test('RestaurantList', () => {
  const { getByText } = render((
    <RestaurantList restaurantList={restaurantList} />
  ));

  expect(getByText(/호식당/)).not.toBeNull();
});
