import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import List from './List';

jest.mock('react-redux');

describe('ListContainer', () => {
  const restaurants = [
    {
      id: 1, name: '한식당', category: '한식', address: '강남구',
    },
    {
      id: 2, name: '중식당', category: '중식', address: '송파구',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  context('with restaurants', () => {
    it('restaurant 목록이 보인다.', () => {
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
