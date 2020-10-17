import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  render(<App />);

  const { getByText, getByPlaceholderText, getByRole } = screen;

  expect(getByText('Restaurants')).toBeInTheDocument();
  expect(getByPlaceholderText('이름')).toBeInTheDocument();
  expect(getByPlaceholderText('분류')).toBeInTheDocument();
  expect(getByPlaceholderText('주소')).toBeInTheDocument();
  expect(getByRole('button', { name: '등록' })).toBeInTheDocument();
});
