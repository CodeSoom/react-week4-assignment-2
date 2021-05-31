import React from 'react';

import { useSelector } from 'react-redux';

import { render } from "@testing-library/react";

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('Restaurants', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render(
    (
      <Restaurants restaurants={restaurants}/>
    ),
  );

  expect(getByText(/김밥제국/)).not.toBeNull();
});
