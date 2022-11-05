import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

test('Restaurants', () => {
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));

  expect(getByText(/맛나분식/)).not.toBeNull();
});
