import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
    restaurant: {},
  }));

  const { getByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalledWith({
    type: 'setRestaurants',
    payload: { restaurants },
  });

  expect(getByText(/맛나분식/)).not.toBeNull();
});
