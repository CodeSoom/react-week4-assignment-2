import React from 'react';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurants from '../__fixtures__/restaurants';

import ListContainer from './ListContainer';

jest.mock('react-redux');

function renderListContainer() {
  render(<ListContainer />);

  return {
    getRestaurantListItems: () => screen.getAllByRole('listitem'),
  };
}

describe('<ListContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));
  });

  context('with restaurants', () => {
    it('renders restaurants', () => {
      // when
      const { getRestaurantListItems } = renderListContainer();

      // then
      const restaurantListItems = getRestaurantListItems();
      expect(restaurantListItems).toHaveLength(restaurants.length);
      restaurantListItems.forEach((item, index) => {
        expect(item.innerHTML).toBe(`${restaurants[index].name} | ${restaurants[index].category} | ${restaurants[index].address}`);
      });
    });
  });
});
