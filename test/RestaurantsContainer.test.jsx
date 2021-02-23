import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from '../src/RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((
    <RestaurantsContainer />
  ));

  expect(getByText(/김밥천국/)).not.toBeNull();
});
