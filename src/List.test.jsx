import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('renders', () => {
    it('restaurants information', () => {
      const restaurants = [
        {
          id: 1,
          name: '한식이 좋아!',
          category: '한식',
          address: '서울시 강남구',
        },
        {
          id: 2,
          name: '중식이 좋아!',
          category: '중식',
          address: '경기도 분당구',
        },
      ];

      const { getAllByRole } = render(<List restaurants={restaurants} />);

      const restaurantList = getAllByRole('listitem');

      restaurantList.forEach((restaurant, index) => {
        expect(restaurant).toHaveTextContent(restaurants[index].name);
        expect(restaurant).toHaveTextContent(restaurants[index].category);
        expect(restaurant).toHaveTextContent(restaurants[index].address);
      });
    });
  });
});
