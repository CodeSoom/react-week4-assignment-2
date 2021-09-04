import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import restaurants from '../../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((
    <RestaurantsContainer />
  ));
});
