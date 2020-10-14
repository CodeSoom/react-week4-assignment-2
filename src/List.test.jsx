import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  const restaurants = [
    {
      name: '마녀주방',
      classification: '한식',
      location: '서울시 강남구',
    },
    {
      name: '시카고피자',
      classification: '양식',
      location: '이태원동',
    },
  ];

  const { container } = render((
    <List
      restaurants={restaurants}
    />
  ));

  restaurants.forEach((restaurant) => {
    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.classification);
    expect(container).toHaveTextContent(restaurant.location);
  });
});
