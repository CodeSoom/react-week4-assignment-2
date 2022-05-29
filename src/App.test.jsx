import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

test('Restaurants', () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  expect(getByText('Restaurants').textContent).toBe('Restaurants');

  expect(getByPlaceholderText('이름')).not.toBeNull();
  expect(getByPlaceholderText('분류')).not.toBeNull();
  expect(getByPlaceholderText('주소')).not.toBeNull();

  expect(getByText('등록')).toBeInTheDocument();

  fireEvent.click(getByText('등록'));

  expect(getByPlaceholderText('이름')).toHaveValue('');
  expect(getByPlaceholderText('분류')).toHaveValue('');
  expect(getByPlaceholderText('주소')).toHaveValue('');
});
