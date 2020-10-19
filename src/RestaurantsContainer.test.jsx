import React from 'react';

import RestaurantsContainer from './RestaurantsContainer';

import { render } from '@testing-library/react';

test('App', () => {
const { getByText} = render((
  <RestaurantsContainer />
));

expect(getByText(/김밥제국/)).not.toBeNull();
});
