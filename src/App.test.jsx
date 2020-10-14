import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        name: '마녀주방',
        classification: '한식',
        location: '서울시 강남구',
      },
      {
        name: '시카고피자',
        classification: '양식',
        location: '이태원동',
      },
    ],
  }));

  const { container, getByText } = render((
    <App />
  ));

  expect(container).toHaveTextContent('Restaurant');
  expect(getByText(/등록/)).not.toBeNull();
  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울시 강남구/)).not.toBeNull();
});
