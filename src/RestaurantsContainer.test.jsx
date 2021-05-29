import React from 'react';

import {useSelector} from 'react-redux';

import {render}from '@trsting-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplememtation((selector) => selector({
    restaurants,
  }));

  const {getByText} = render((
    <RestaurantsContainer/>
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
})