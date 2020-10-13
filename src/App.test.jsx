import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const restaurants = [
    { name: '마녀주방', category: '한식', address: '서울시 강남구' },
    { name: '시카고피자', category: '양식', address: '이태원동' },
  ];

  useSelector.mockImplementation(() => ({
    restaurants,
  }));

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
