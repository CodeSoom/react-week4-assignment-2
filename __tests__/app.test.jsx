import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from '../src/components/App';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    name: '',
    category: '',
    address: '',
    restaurants: [
      {
        id: 100, name: '마녀주방', category: '한식', address: '서울시 강남구',
      },
      {
        id: 101, name: '시카고피자', category: '양식', address: '이태원동',
      },
    ],
  }));

  const { getByText } = render((<App />));

  expect(getByText(/등록/)).not.toBeNull();

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/시카고피자/)).not.toBeNull();
});
