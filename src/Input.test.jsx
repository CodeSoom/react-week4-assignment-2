import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();

  const { getByPlaceholderText } = render((
    <Input
      value="한식"
      placeholder="분류"
      onChange={handleChange}
    />
  ));

  expect(getByPlaceholderText('분류')).not.toBeNull();

  fireEvent.change(getByPlaceholderText('분류'), {
    target: { value: '양식' },
  });

  expect(handleChange).toBeCalled();
});
