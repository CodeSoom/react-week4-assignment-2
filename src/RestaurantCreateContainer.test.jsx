import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

test('RestaurantListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
  }));

  const { getByText } = render((
    <RestaurantCreateContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();
});
