import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {
    },
  }));

  render((
    <App />
  ));

  expect(dispatch).toBeCalledWith({
    type: 'setRestaurants',
    payload: { restaurants: [] },
  });
});
