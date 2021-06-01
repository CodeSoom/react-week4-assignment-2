import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurants,
    restaurant: {},
  }));

  const { getByText } = render(<App />);

  expect(getByText(/Restaurants/)).not.toBeNull();
});
