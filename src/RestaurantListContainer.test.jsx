import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantListContainer from './RestaurantListContainer';

describe('RestaurantListContainer', () => {
  const restaurants = [
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

  const restaurantData = Object.values(restaurants);

  const renderRestaurantListContainer = () => render(<RestaurantListContainer />);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({ restaurants }));
  });

  it('renders the restaurants', () => {
    const { container } = renderRestaurantListContainer();

    restaurantData.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
