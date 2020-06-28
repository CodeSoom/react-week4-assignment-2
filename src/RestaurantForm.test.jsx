import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

import { newRestaurant } from '../fixture/test-data';

test('RestaurantForm', () => {
  const handleChange = jest.fn();
  const handleClickSubmit = jest.fn();

  const { getByPlaceholderText, getByText } = render(
    <RestaurantForm
      newRestaurant={newRestaurant}
      handleChange={handleChange}
      handleClickSubmit={handleClickSubmit}
    />,
  );

  fireEvent.change(getByPlaceholderText(/이름/), {
    target: { value: '새로운 식당' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.change(getByPlaceholderText(/분류/), {
    target: { value: '새로운 분류' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.change(getByPlaceholderText(/주소/), {
    target: { value: '새로운 주소' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.click(getByText('등록'));

  expect(handleClickSubmit).toBeCalled();
});
