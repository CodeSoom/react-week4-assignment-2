import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import { restaurantsFixture, initRestaurant } from './fixtures/fixtures';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: restaurantsFixture,
    restaurant: initRestaurant,
  }));

  const { getByText, container } = render((
    <App />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  restaurantsFixture.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
