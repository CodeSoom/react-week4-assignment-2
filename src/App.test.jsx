import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const reservations = [
    { name: '대천부양꼬치', type: '중식', address: '경기도 남양주시' },
    { name: '바토스', type: '양식', address: '이태원동' },
  ];

  useSelector.mockImplementation((selector) => selector({
    reservations,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/등록/)).not.toBeNull();
  expect(getByText('대천부양꼬치 | 중식 | 경기도 남양주시')).not.toBeNull();
  expect(getByText('바토스 | 양식 | 이태원동')).not.toBeNull();
});
