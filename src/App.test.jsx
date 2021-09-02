import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Restaurants/)).not.toBeNull();
  expect(getByText(/등록/)).not.toBeNull();
});
