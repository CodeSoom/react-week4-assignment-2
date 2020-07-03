import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import restaurantList from '../fixtures/restaurantList';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantList,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/호식당/)).not.toBeNull();
});
