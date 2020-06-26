import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from 'Input';

test('Input', () => {

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByPlaceholderText, getByText } = render(
    <Input onChange={handleChange} onClick={handleClick}/>
  );

  expect(getByPlaceholderText(/이름/)).not.toBeEmpty();
  expect(getByPlaceholderText(/분류/)).not.toBeEmpty();
  expect(getByPlaceholderText(/주소/)).not.toBeEmpty();
  expect(getByText(/등록/)).not.toBeEmpty();

  expect(handleClick).not.toBeCalled();

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});