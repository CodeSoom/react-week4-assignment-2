import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import restaurantList from '../fixtures/restaurantList';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantList,
  }));

  const { getByText } = render((
    <App />
  ));

  // action이 원하는 type이 맞는지 확인
  expect(dispatch).toBeCalledWith({
    type: 'setRestaurantList',
    payload: { restaurantList },
  });

  expect(getByText(/호식당/)).not.toBeNull();
});
