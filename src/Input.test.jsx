import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { queryByText, queryByPlaceholderText } = render((
    <Input onChnage={handleChange} onClick={handleClick} />
  ));

  fireEvent.change(queryByPlaceholderText('이름'), {
    target: { value: '어느 식당' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.change(queryByPlaceholderText('분류'), {
    target: { value: '한식' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.change(queryByPlaceholderText('주소'), {
    target: { value: '어딘가' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.click(queryByText('등록'));

  expect(handleClick).toBeCalled();
});
