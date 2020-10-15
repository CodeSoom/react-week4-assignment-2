import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { name: '마녀주방', category: '한식', address: '서울시 강남구' },
      { name: '시카고피자', category: '양식', address: '이태원동' },
    ],
  }));

  const { container } = render(<App />);

  expect(container).toHaveTextContent(/마녀주방/);
  expect(container).toHaveTextContent(/시카고피자/);
});
