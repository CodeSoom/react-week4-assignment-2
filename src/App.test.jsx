import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    registers: [{ id: 1, information: '마녀식당 | 한식 | 서울시 강남구' }],
  }));

  const { queryByText, queryByPlaceholderText } = render((
    <App />
  ));

  expect(queryByText(/마녀식당 | 한식 | 서울시 강남구/)).not.toBeNull();
  expect(queryByText(/등록/)).not.toBeNull();
  expect(queryByPlaceholderText(/이름/)).not.toBeNull();
});
