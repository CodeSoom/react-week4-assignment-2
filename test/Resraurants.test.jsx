import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from '../src/Restaurants';

test('Restaurants', () => {
  const restaurants = [
    {
      id: 1, name: '김밥천국', category: '분식', address: '서울시 서초구 방배동',
    },
  ];

  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));

  expect(getByText(/김밥천국/)).not.toBeNull();
});
