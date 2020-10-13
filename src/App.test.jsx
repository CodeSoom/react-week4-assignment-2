import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getByPlaceholderText } = render(
    <App />,
  );

  expect(getByText('Restaurants')).not.toBeNull();

  expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
  expect(getByText('시카고피자 | 양식 | 이태원동')).not.toBeNull();

  expect(getByPlaceholderText('이름')).not.toBeNull();
  expect(getByPlaceholderText('분류')).not.toBeNull();
  expect(getByPlaceholderText('주소')).not.toBeNull();
  expect(getByText('등록')).not.toBeNull();
});
