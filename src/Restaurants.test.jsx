import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it(' 예약 목록을 보여준다.', () => {
    const restaurants = [
      {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
        id: 1,
      },
      {
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
        id: 2,
      },
    ];

    const { container } = render((
      <Restaurants restaurants={restaurants} />
    ));

    restaurants.forEach((restaurant) => {
      const { name, category, address } = restaurant;

      expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
    });
  });
});
