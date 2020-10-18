import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getByPlaceholderText } = render((
    <App />
  ));

  expect(getByText('대천부양꼬치 | 양식 | 경기도 남양주시')).not.toBeNull();
  expect(getByText('바토스 | 양식 | 이태원동')).not.toBeNull();

  expect(getByText(/Restaurants/)).not.toBeNull();
  expect(getByPlaceholderText(/이름/)).not.toBeNull();
  expect(getByPlaceholderText(/분류/)).not.toBeNull();
  expect(getByPlaceholderText(/주소/)).not.toBeNull();
  expect(getByText(/등록/)).not.toBeNull();
});
