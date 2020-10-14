import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from '../src/components/Restaurant';

test('Restaurant', () => {
  const restaurant = {
    id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
  };
  const { getByText } = render((
    <Restaurant
      items={restaurant}
    />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울시 강남구/)).not.toBeNull();
});
