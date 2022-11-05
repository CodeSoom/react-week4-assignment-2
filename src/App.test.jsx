import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalledWith({
    type: 'setRestaurants',
    payload: { restaurants: [] },
  });

  expect(queryByText(/맛나분식/)).toBeNull();
});
