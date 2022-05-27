import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

const dispatch = useDispatch();

test('App', () => {
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
    restaurantInfo: {
      name: '',
      address: '',
      phone: '',
    },
  }));

  const { getByText } = render(<App />);
  const element = getByText(/Restaurants/);
  expect(element).toBeInTheDocument();
});
