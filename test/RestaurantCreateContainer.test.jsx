import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantCreateContainer from '../src/RestaurantCreateContainer';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  useSelector.mockImplementation((selector) => selector({
  }));

  const { getByText } = render((
    <RestaurantCreateContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();
});
