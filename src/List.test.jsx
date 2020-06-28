import React from 'react';

import { render, screen } from '@testing-library/react';

import List from './List';

function renderList(restaurants) {
  render(<List
    restaurants={restaurants}
  />);

  return {
    restaurantListItems: screen.queryAllByRole('listitem'),
  };
}

describe('<List />', () => {
  let restaurants;

  context('without restaurants', () => {
    beforeEach(() => {
      restaurants = [];
    });

    it('do not print restaurant item', () => {
      // when
      const { restaurantListItems } = renderList(restaurants);

      // then
      expect(restaurantListItems).toHaveLength(0);
    });
  });

  context('with restaurants', () => {
    beforeEach(() => {
      restaurants = [{
        id: 1,
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      },
      {
        id: 2,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
      {
        id: 3,
        name: '키와미',
        category: '일식',
        address: '분당구 정자동',
      }];
    });

    it('print the restaurant items', () => {
      // when
      const { restaurantListItems } = renderList(restaurants);

      // then
      expect(restaurantListItems).toHaveLength(restaurants.length);
      restaurantListItems.forEach((item, index) => {
        expect(item.innerHTML).toBe(`${restaurants[index].name} | ${restaurants[index].category} | ${restaurants[index].address}`);
      });
    });
  });
});
