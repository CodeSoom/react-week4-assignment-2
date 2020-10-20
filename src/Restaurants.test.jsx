import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const restaurants = [
    {
      id: 1, title: '김밥제국', category: '서울시 강남구 역삼동',
    },
  ];
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
});
