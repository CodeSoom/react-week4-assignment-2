import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { container, getByText } = render((
    <App />
  ));

  expect(container).toHaveTextContent('Restaurant');
  expect(getByText(/등록/)).not.toBeNull();
  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울시 강남구/)).not.toBeNull();
});
