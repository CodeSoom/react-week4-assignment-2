import { render } from '@testing-library/react';

import Restaurnats from './Restaurants';

import restaurants from '../fixtures/restaurants';

test('Restaurnats', () => {
  const { getByText } = render((
    <Restaurnats restaurants={restaurants} />
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
});
