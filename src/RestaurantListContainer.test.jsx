import React from 'react';

import { render } from '@testing-library/react';

import RestaurantListContainer from './RestaurantListContainer';

test('RestaurantListContainer', () => {
  const { getByText } = render((
    <RestaurantListContainer />
  ));

  expect(getByText(/호식당/)).not.toBeNull();
});
