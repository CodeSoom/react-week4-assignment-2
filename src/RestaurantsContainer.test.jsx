import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';
import { restaurants } from '../fixture/test-data';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
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
