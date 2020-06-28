import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

test('RestaurantList', () => {
  const restaurantList = {
    id: 1,
    name: '호식당',
    category: '일식',
    address: '경기도 수정구 태평동',
  };

  const { getByText } = render((
    <RestaurantList restaurantList={restaurantList} />
  ));

  expect(getByText(/호식당/)).not.toBeNull();
});
