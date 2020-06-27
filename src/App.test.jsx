import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getByPlaceholderText } = render((
    <App />
  ));

  const name = '깐부치킨';
  const category = '치킨';
  const address = '용인수지';

  expect(getByText(/Restaurants/)).not.toBeNull();

  fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });
  fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });
  fireEvent.change(getByPlaceholderText(/주소/), { target: { value: address } });
  fireEvent.click(getByText(/등록/));

  expect(getByText(`${name} | ${category} | ${address}`)).not.toBeNull();
});
