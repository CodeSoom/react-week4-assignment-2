import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with restaurant infomations', () => {
    it('renders restaurant list', () => {
      const restaurants = [
        {
          id: 1, name: '버튼업', category: '경양식', address: '마포구',
        },
        {
          id: 2, name: '스시로로', category: '일식', address: '동작구',
        },
      ];

      const { getByText } = render((
        <List
          restaurants={restaurants}
        />
      ));

      restaurants.forEach((restaurant) => {
        expect(
          getByText(`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`),
        ).not.toBeNull();
      });
    });
  });
});
