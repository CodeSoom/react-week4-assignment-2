import { render } from '@testing-library/react';

import Restaurnats from './Restaurants';

import restaurants from '../fixtures/restaurants';

test('Restaurnats', () => {
  const { getByText } = render((
    <Restaurnats restaurants={restaurants} />
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
  expect(getByText(/분식/)).not.toBeNull();
  expect(getByText(/서울시 강남구 역삼동/)).not.toBeNull();
});
