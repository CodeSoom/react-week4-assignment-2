import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  const renderRestaurantList = (restaurants) => render((
    <RestaurantList
      restaurants={restaurants}
    />
  ));

  const restaurantList = [
    {
      id: 1, name: '베이징', category: '중식', address: '파주시',
    },
    {
      id: 2, name: '죽도대구매운탕', category: '한식', address: '고양시',
    },
    {
      id: 3, name: '봉참치', category: '일식', address: '파주시',
    },
  ];

  it('renders tasks', () => {
    const { container } = renderRestaurantList(restaurantList);

    restaurantList.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
