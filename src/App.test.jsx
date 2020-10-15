import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const initialState = {
    restaurants: [
      { name: '마녀주방', category: '한식', address: '서울시 강남구' },
      { name: '시카고피자', category: '양식', address: '이태원동' },
    ],
  };

  const { container } = render(<App />);

  expect(container).toHaveTextContent(initialState.restaurants[0].name);
  expect(container).toHaveTextContent(initialState.restaurants[1].name);
});
