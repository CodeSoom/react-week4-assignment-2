import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import FormContainer from './FormContainer';

test('FormContainer', () => {
  const handleClickAdd = jest.fn();
  const handleChange = jest.fn();

  const restaurant = {
    name: '키와미',
    category: '일식',
    address: '분당구 정자동',
  };

  const { getByDisplayValue, getByText } = render((
    <FormContainer
      restaurant={restaurant}
      onClickAdd={handleClickAdd}
      onChange={handleChange}
    />
  ));

  expect(getByDisplayValue(restaurant.name)).toBeInTheDocument();

  fireEvent.click(getByText(/등록/));

  expect(handleClickAdd).toBeCalled();
});
