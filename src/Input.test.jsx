import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleInputChange = jest.fn();
  const handleRegisterClick = jest.fn();

  const { queryByText, queryByPlaceholderText } = render((
    <Input onChange={handleInputChange} onClick={handleRegisterClick} />
  ));

  fireEvent.change(queryByPlaceholderText('이름'), {
    target: { value: '어느 식당' },
  });

  expect(handleInputChange).toBeCalled();

  fireEvent.change(queryByPlaceholderText('분류'), {
    target: { value: '한식' },
  });

  expect(handleInputChange).toBeCalled();

  fireEvent.change(queryByPlaceholderText('주소'), {
    target: { value: '어딘가' },
  });

  expect(handleInputChange).toBeCalled();

  fireEvent.click(queryByText('등록'));

  expect(handleRegisterClick).toBeCalled();
});
