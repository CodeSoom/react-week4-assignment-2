import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const restaurants = [
    { name: '마녀주방', category: '한식', address: '서울시 강남구' },
    { name: '시카고피자', category: '양식', address: '이태원동' },
  ];

  const inputs = [
    { placeholder: '이름', value: '시카고피자' },
    { placeholder: '분류', value: '양식' },
    { placeholder: '주소', value: '이태원동' },
  ];

  useSelector.mockImplementation(() => ({
    restaurants,
    inputs,
  }));

  const { getByText, getByPlaceholderText } = render(
    <App />,
  );

  expect(getByText('Restaurants')).not.toBeNull();

  restaurants.forEach(({ name, category, address }) => {
    expect(getByText(`${name} | ${category} | ${address}`)).not.toBeNull();
  });

  inputs.forEach(({ placeholder, value }) => {
    expect(getByPlaceholderText(placeholder)).toHaveDisplayValue(value);
  });

  expect(getByText('등록')).not.toBeNull();
});
