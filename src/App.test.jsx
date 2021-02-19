import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { queryByText, queryByPlaceholderText } = render((<App />));

  expect(queryByText(/마녀식당 | 한식 | 서울시 강남구/)).not.toBeNull();
  expect(queryByText(/등록/)).not.toBeNull();
  expect(queryByPlaceholderText(/이름/)).not.toBeNull();
});
