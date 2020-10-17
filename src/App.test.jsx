import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const restaurants = [
    {
      id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
    },
    {
      id: 2, name: '시카고피자', category: '양식', address: '이태원동',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurants,
    restaurant: { name: '', category: '', address: '' },
  }));

  const { getByText, container } = render((
    <App />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  restaurants.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
