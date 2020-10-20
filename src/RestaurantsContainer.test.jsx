import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  const { getByText } = render((
    <RestaurantsContainer />
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
});
