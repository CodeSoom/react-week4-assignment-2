import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantListContainer from './RestaurantListContainer';

import restaurantList from '../fixtures/restaurantList';

// react-redux mock을 생성
// TODO: why use
jest.mock('react-redux');

test('RestaurantListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantList,
  }));

  const { getByText } = render((
    <RestaurantListContainer />
  ));

  expect(getByText(/호식당/)).not.toBeNull();
});
