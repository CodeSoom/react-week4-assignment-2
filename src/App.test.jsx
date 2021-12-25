import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
});
