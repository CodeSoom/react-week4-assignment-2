import React from 'react';

import { render, screen } from '@testing-library/react';

import restaurantsFixtures from '../__fixtures__/restaurants';

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
      restaurants = restaurantsFixtures;
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
