import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('Restaurants App', () => {
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [],
  }));

  const { getByText, getByPlaceholderText } = render((
    <App />
  ));

  // App name
  expect(getByText('Restaurants')).not.toBeNull();

  // Input List
  expect(getByPlaceholderText('이름')).not.toBeNull();
  expect(getByPlaceholderText('분류')).not.toBeNull();
  expect(getByPlaceholderText('주소')).not.toBeNull();

  // Add Button
  expect(getByText('등록')).not.toBeNull();
});
