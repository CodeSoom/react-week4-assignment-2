import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('Restaurant App', () => {
  const { getByText, getByPlaceholderText } = render((
    <App />
  ));

  // App name
  expect(getByText('Restaurants')).not.toBeNull();

  // Input List
  expect(getByPlaceholderText('이름')).not.toBeNull();
  expect(getByPlaceholderText('분류')).not.toBeNull();
  expect(getByPlaceholderText('주소')).not.toBeNull();

  // Add Button
  expect(getByText('등록')).not.toBeNull();
});
