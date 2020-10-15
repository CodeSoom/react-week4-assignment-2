import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();

  const value = '마녀식당';

  const { getByDisplayValue } = render((
    <Input value={value} onChange={handleChange} />
  ));

  expect(getByDisplayValue(value)).toBeInTheDocument();

  expect(handleChange).not.toBeCalled();

  fireEvent.change(getByDisplayValue(value), {
    target: {
      value: 'something',
    },
  });

  expect(handleChange).toBeCalledTimes(1);
});
