import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const name = 'name';
  const placeholderText = '이름';
  const newText = '마녀주방';

  const handleChangeInput = jest.fn();

  const { getByRole, getByPlaceholderText } = render((
    <Input
      name={name}
      placeholderText={placeholderText}
      onChange={handleChangeInput}
    />
  ));

  expect(getByRole('textbox')).toHaveAttribute('name', 'name');

  const input = getByPlaceholderText(placeholderText);

  fireEvent.change(input,
    { target: { value: newText } });

  expect(handleChangeInput).toBeCalled();
});
