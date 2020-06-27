import React from 'react';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

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
      restaurants: [],
    }));
  });

  context('with restaurants', () => {
    it('renders restaurants', () => {
      // given
      const restaurants = [{
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
      }];
      useSelector.mockImplementation((selector) => selector({
        input: {
          name: '',
          category: '',
          address: '',
        },
        restaurants,
      }));

      // when
      const { getRestaurantListItems } = renderListContainer();

      // then
      const restaurantListItems = getRestaurantListItems();
      expect(restaurantListItems).toHaveLength(2);
      restaurantListItems.forEach((item, index) => {
        expect(item.innerHTML).toBe(`${restaurants[index].name} | ${restaurants[index].category} | ${restaurants[index].address}`);
      });
    });
  });
});
