import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from '../src/Restaurants';

import restaurants from '../fixtures/restaurants';

test('Restaurants', () => {
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));

  expect(getByText(/김밥천국/)).not.toBeNull();
});
