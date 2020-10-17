import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('Restaurant App', () => {
  const restaurants = [
    {
      id: 100,
      name: '마녀주방',
      type: '양식',
      address: '강남구 서현동',
    },
    {
      id: 101,
      name: '시카고피자',
      type: '양식',
      address: '용산구 이태원동',
    },
    {
      id: 102,
      name: '카와미',
      type: '일식',
      address: '분당구 정자동',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { container, getByText, getByPlaceholderText } = render((
    <App />
  ));

  // App name
  expect(container).toHaveTextContent('Restaurants');

  // Input List
  expect(getByPlaceholderText('이름')).not.toBeNull();
  expect(getByPlaceholderText('분류')).not.toBeNull();
  expect(getByPlaceholderText('주소')).not.toBeNull();

  // Add Button
  expect(getByText('등록')).not.toBeNull();
});
