import React from 'react';

import {useSelector} from 'react-redux';

import {render}from '@trsting-library/react';

import RestaurantCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  useSelector.mockImplememtation((selector) => selector({
  }));

  const {getByText} = render((
    <RestaurantCreateContainer/>
  ));

  expect(getByText(/등록/)).not.toBeNull();
})