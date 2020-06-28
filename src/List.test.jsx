import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with restaurants', () => {
    it('restaurant 목록이 보인다.', () => {
      const restaurants = [
        {
          id: 1, name: '한식당', category: '한식', address: '강남구',
        },
        {
          id: 2, name: '중식당', category: '중식', address: '송파구',
        },
      ];

      const { container } = render(
        <List
          restaurants={restaurants}
        />,
      );

      restaurants.forEach((restaurant) => {
        expect(container).toHaveTextContent(`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`);
      });
    });
  });
});
