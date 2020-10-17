import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getByPlaceholderText } = render((
    <App />
  ));

  expect(getByText(/Restaurants/)).not.toBeNull();
});
