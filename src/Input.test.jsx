import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const placeholderText = '이름';
  const newText = '마녀주방';

  const handleChangeInput = jest.fn();

  const { getByRole, getByPlaceholderText } = render((
    <Input
      placeholderText={placeholderText}
      onChange={handleChangeInput}
    />
  ));

  expect(getByRole('textbox')).not.toBeNull();

  const input = getByPlaceholderText(placeholderText);

  expect(input).not.toBeNull();

  fireEvent.change(input,
    { target: { value: newText } });

  expect(handleChangeInput).toBeCalled();
});
