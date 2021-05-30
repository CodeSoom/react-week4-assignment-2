import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalledWith({
    type: 'setRestaurants', payload: { restaurants },
  });

  expect(getByText(/Restaurants/)).not.toBeNull();
  expect(getByText(/김밥제국/)).not.toBeNull();
});
