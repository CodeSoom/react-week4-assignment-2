import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const restaurants = [
    {
      id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
    },
  ];

  const { getByText } = render((<Restaurants restaurants={restaurants} />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울시 강남구/)).not.toBeNull();
});
