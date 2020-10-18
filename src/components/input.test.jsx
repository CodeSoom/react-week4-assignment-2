import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();

  const { getByDisplayValue, getByPlaceholderText } = render((
    <Input
      placeholder="이름"
      value="시카고피자"
      onChange={handleChange}
    />
  ));

  expect(getByDisplayValue(/시카고피자/)).not.toBeNull();

  fireEvent.change(getByPlaceholderText('이름'), {
    target: { value: '마녀주방' },
  });

  expect(handleChange).toBeCalled();
});
