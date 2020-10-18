import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [
      { name: '마녀주방', category: '한식', address: '서울시 강남구' },
      { name: '시카고피자', category: '양식', address: '이태원동' },
    ],
  }));

  const { container } = render(<App />);

  expect(container).toHaveTextContent(/Restaurants/);
  expect(container).toHaveTextContent(/마녀주방/);
  expect(container).toHaveTextContent(/시카고피자/);
});
