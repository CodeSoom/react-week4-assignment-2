import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  const restaurants = [
    {
      id: 1, name: '맘스터치', category: '패스트푸드', address: '용인수지',
    },
    {
      id: 2, name: '깐부치킨', category: '치킨', address: '용인수지',
    },
  ];
  useSelector.mockImplementation((selector) => selector({ restaurants }));

  const { container } = render((
    <RestaurantsContainer />
  ));

  restaurants.forEach((restaurant) => {
    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.category);
    expect(container).toHaveTextContent(restaurant.address);
  });
});
