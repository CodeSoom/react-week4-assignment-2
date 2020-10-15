import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('Restaurant App', () => {
  const { getByText, getByPlaceholder } = render((
    <App />
  ));

  // App name
  expect(getByText('Restaurants')).not.toBeNull();

  // Input List
  expect(getByPlaceholder('이름')).not.toBeNull();
  expect(getByPlaceholder('분류')).not.toBeNull();
  expect(getByPlaceholder('주소')).not.toBeNull();

  // Add Button
  expect(getByText('등록')).not.toBeNull();
});
